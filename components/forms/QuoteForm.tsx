"use client";

import { useState } from "react";
import { Send, Check, AlertCircle, Paperclip } from "lucide-react";

type State = "idle" | "submitting" | "success" | "error";

const services = [
  { value: "laser", label: "Debitare laser" },
  { value: "abkant", label: "Prelucrare abkant" },
  { value: "ambele", label: "Ambele" },
  { value: "nu-stiu", label: "Nu știu încă" },
];

export function QuoteForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);
    const formData = new FormData(e.currentTarget);
    formData.set("kind", "quote");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Trimitere eșuată");
      setState("success");
      e.currentTarget.reset();
      setFileName(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Eroare la trimitere");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-bg-elevated border border-success/30 rounded-lg p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-success/15 text-success flex items-center justify-center mx-auto mb-5">
          <Check className="w-7 h-7" />
        </div>
        <h3 className="text-h3 text-text-primary mb-3">Mulțumim! Am primit cererea ta.</h3>
        <p className="text-text-secondary">
          Te contactăm de obicei în 2–4h în intervalul L–S, 07:00–20:00.
          <br />Între timp, ne poți scrie direct pe WhatsApp pentru un răspuns instant.
        </p>
      </div>
    );
  }

  const baseCls = "w-full bg-bg-surface border border-border focus:border-accent rounded px-4 py-3 text-text-primary text-sm placeholder:text-text-muted outline-none transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Nume și companie" name="name" required />
        <Field label="Telefon sau email" name="contact" required helper="Alege ce preferi" />
      </div>

      <label className="block">
        <span className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">
          Serviciu dorit <span className="text-accent">*</span>
        </span>
        <select name="service" required className={baseCls} defaultValue="">
          <option value="" disabled>Selectează</option>
          {services.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </label>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Material și grosime estimată" name="material" placeholder="ex: OL37 4mm" />
        <Field label="Cantitate estimată" name="quantity" placeholder="ex: 25 buc" />
      </div>

      {/* File upload */}
      <label className="block">
        <span className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">
          Atașează fișier <span className="text-text-muted">(DXF, DWG, STEP, STP, PDF — max 20MB)</span>
        </span>
        <div className="relative">
          <input
            type="file"
            name="file"
            accept=".dxf,.dwg,.step,.stp,.pdf"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="flex items-center gap-3 bg-bg-surface border border-dashed border-border rounded px-4 py-3 text-sm hover:border-border-strong transition-colors">
            <Paperclip className="w-4 h-4 text-text-muted" />
            <span className={fileName ? "text-text-primary" : "text-text-muted"}>
              {fileName || "Selectează fișier"}
            </span>
          </div>
        </div>
      </label>

      <Field label="Detalii suplimentare / cerințe speciale" name="message" textarea />

      {error && (
        <div className="flex items-center gap-2 text-error text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm px-7 py-4 rounded transition-colors"
        >
          {state === "submitting" ? "Se trimite..." : (
            <>
              <Send className="w-4 h-4" />
              Trimite cererea de ofertă
            </>
          )}
        </button>
        <p className="text-xs text-text-muted">
          Răspuns în aceeași zi. Datele se folosesc doar pentru ofertă.
        </p>
      </div>
    </form>
  );
}

function Field({
  label, name, required, type = "text", textarea = false, helper, placeholder,
}: {
  label: string; name: string; required?: boolean; type?: string;
  textarea?: boolean; helper?: string; placeholder?: string;
}) {
  const baseCls = "w-full bg-bg-surface border border-border focus:border-accent rounded px-4 py-3 text-text-primary text-sm placeholder:text-text-muted outline-none transition-colors";
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">
        {label} {required && <span className="text-accent">*</span>}
        {helper && <span className="text-text-muted normal-case tracking-normal ml-2">— {helper}</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} placeholder={placeholder} className={baseCls} />
      ) : (
        <input type={type} name={name} required={required} placeholder={placeholder} className={baseCls} />
      )}
    </label>
  );
}
