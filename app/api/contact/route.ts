import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20 MB
const ALLOWED_EXT = ["dxf", "dwg", "step", "stp", "pdf"];

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Honeypot
    const hp = String(form.get("website") || "");
    if (hp) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const kind = String(form.get("kind") || "contact");
    const name = String(form.get("name") || "").trim();
    const contact = String(form.get("contact") || "").trim();
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
