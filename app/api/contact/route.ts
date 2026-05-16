import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const MAX_FILE_BYTES = 20 * 1024 * 1024;
const ALLOWED_EXT = ["dxf", "dwg", "step", "stp", "pdf"];
const MAX_NAME = 200;
const MAX_CONTACT = 200;
const MAX_MESSAGE = 5000;
const MAX_SHORT = 300;

// In-memory rate limiter — persists within an isolate, resets on cold starts.
const _rl = new Map<string, { n: number; t: number }>();
const RL_WINDOW = 3_600_000;
const RL_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (_rl.size > 5_000) {
    const cutoff = now - RL_WINDOW;
    for (const [k, v] of _rl) if (v.t < cutoff) _rl.delete(k);
  }
  const e = _rl.get(ip);
  if (!e || now - e.t > RL_WINDOW) { _rl.set(ip, { n: 1, t: now }); return false; }
  if (e.n >= RL_MAX) return true;
  e.n++;
  return false;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("cf-connecting-ip")
      || req.headers.get("x-forwarded-for")?.split(",")[0].trim()
      || "anon";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Prea multe cereri. Încearcă mai târziu." }, { status: 429 });
    }

    const form = await req.formData();

    // Honeypot
    const hp = String(form.get("website") || "");
    if (hp) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const kind = String(form.get("kind") || "contact");
    const name = String(form.get("name") || "").trim();
    const contact = String(form.get("contact") || "").trim().replace(/[\r\n]/g, "");
    const message = String(form.get("message") || "").trim();
    const service = String(form.get("service") || "").trim();
    const material = String(form.get("material") || "").trim();
    const quantity = String(form.get("quantity") || "").trim();
    const file = form.get("file") as File | null;

    if (!name || !contact) {
      return NextResponse.json({ error: "Completează numele și contactul." }, { status: 400 });
    }
    if (kind === "contact" && !message) {
      return NextResponse.json({ error: "Adaugă un mesaj." }, { status: 400 });
    }
    if (name.length > MAX_NAME || contact.length > MAX_CONTACT) {
      return NextResponse.json({ error: "Câmpuri prea lungi." }, { status: 400 });
    }
    if (message.length > MAX_MESSAGE) {
      return NextResponse.json({ error: "Mesajul depășește 5000 de caractere." }, { status: 400 });
    }
    if (service.length > MAX_SHORT || material.length > MAX_SHORT || quantity.length > MAX_SHORT) {
      return NextResponse.json({ error: "Câmpuri prea lungi." }, { status: 400 });
    }

    // File validation
    let attachment: { filename: string; content: Buffer } | null = null;
    if (file && file.size > 0) {
      if (file.size > MAX_FILE_BYTES) {
        return NextResponse.json({ error: "Fișierul depășește 20MB." }, { status: 400 });
      }
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      if (!ALLOWED_EXT.includes(ext)) {
        return NextResponse.json({ error: "Format fișier neacceptat. Permise: DXF, DWG, STEP, STP, PDF." }, { status: 400 });
      }
      const arrayBuf = await file.arrayBuffer();
      attachment = { filename: file.name, content: Buffer.from(arrayBuf) };
    }

    const subject =
      kind === "quote"
        ? `[Cerere ofertă] ${name}${service ? ` — ${service}` : ""}`
        : `[Contact site] ${name}`;

    const rows: [string, string][] = [
      ["Tip", kind === "quote" ? "Cerere ofertă" : "Contact"],
      ["Nume", name],
      ["Contact", contact],
    ];
    if (service) rows.push(["Serviciu", service]);
    if (material) rows.push(["Material/grosime", material]);
    if (quantity) rows.push(["Cantitate", quantity]);
    if (message) rows.push(["Mesaj", message]);

    const html = `
      <h2>${escapeHtml(subject)}</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#666">${escapeHtml(k)}</td><td style="padding:6px 12px;border-bottom:1px solid #eee">${escapeHtml(v).replace(/\n/g, "<br/>")}</td></tr>`
          )
          .join("")}
      </table>
      <p style="font-family:sans-serif;font-size:12px;color:#999;margin-top:24px">
        Trimis de pe ${site.url} — ${new Date().toISOString()}
      </p>
    `;

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL || site.email;
    const from = process.env.CONTACT_FROM || `SOZO PROJECT <onboarding@resend.dev>`;

    if (!apiKey) {
      // Dev fallback: log payload, return success so the form is testable end-to-end
      console.log("[contact] RESEND_API_KEY missing — logging only:", { to, from, subject, rows, hasFile: !!attachment });
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: contact.includes("@") ? contact : undefined,
      html,
      attachments: attachment ? [attachment] : undefined,
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json({ error: "Eroare la trimitere. Încearcă WhatsApp." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json({ error: "Eroare neașteptată." }, { status: 500 });
  }
}
