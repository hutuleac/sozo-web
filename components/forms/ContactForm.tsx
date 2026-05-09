"use client";

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";

type State = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Trimitere eșuată");
      setState("success");
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Eroare la trimitere");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-bg-elevated border border-success/30 rounded-lg p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-success/15 text-success flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="text-h4 text-text-primary mb-2">Mulțumim! Am primit mesajul.</h3>
        <p className="text-text-secondary text-sm">
          Te contactăm în maximum 2 ore în intervalul L–S, 07:00–20:00.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <Field label="Nume și companie" name="name" required />
      <Field label="Telefon sau email" name="contact" required type="text" />
      <Field label="Mesajul tău" name="message" required textarea />

      {error && (
        <div className="flex items-center gap-2 text-error text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-3 rounded transition-colors w-full sm:w-auto"
      >
        {state === "submitting" ? "Se trimite..." : (
          <>
            <Send className="w-4 h-4" />
            Trimite mesaj
          </>
        )}
      </button>

      <p className="text-xs text-text-muted">
        Datele tale sunt folosite doar pentru a-ți răspunde la cerere. Nu le partajăm cu terți.
      </p>
    </form>
  );
}

function Field({
  label, name, required, type = "text", textarea = false,
}: { label: string; name: string; required?: boolean; type?: string; textarea?: boolean }) {
  const baseCls = "w-full bg-bg-surface border border-border focus:border-accent rounded px-4 py-3 text-text-primary text-sm placeholder:text-text-muted outline-none transition-colors";
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={baseCls} />
      ) : (
        <input type={type} name={name} required={required} className={baseCls} />
      )}
    </label>
  );
}
