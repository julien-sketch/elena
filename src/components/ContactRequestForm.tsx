"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactRequestForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message ?? "Une erreur est survenue.");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch (submissionError) {
      setStatus("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Impossible d'envoyer votre message pour le moment."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="card-elevated rounded-[2rem] p-6 md:p-8">
      <input type="hidden" name="requestType" value="patrimoine" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom" name="lastName" autoComplete="family-name" required />
        <Field label="Prénom" name="firstName" autoComplete="given-name" required />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Téléphone" name="phone" type="tel" autoComplete="tel" required />
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-navy">Sujet principal</span>
        <select
          name="topic"
          required
          className="focus-ring mt-2 h-12 w-full rounded-2xl border border-navy/12 bg-ivory/80 px-4 text-sm text-ink outline-none transition"
          defaultValue=""
        >
          <option value="" disabled>
            Sélectionner un sujet
          </option>
          <option value="Placement et épargne">Placement et épargne</option>
          <option value="Retraite">Retraite</option>
          <option value="Transmission">Transmission</option>
          <option value="Budget ou projet de vie">Budget ou projet de vie</option>
          <option value="Autre demande patrimoniale">Autre demande patrimoniale</option>
        </select>
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-navy">Message</span>
        <textarea
          name="message"
          rows={6}
          required
          className="focus-ring mt-2 w-full rounded-2xl border border-navy/12 bg-ivory/80 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70"
          placeholder="Présentez brièvement votre situation, votre objectif et le type d'échange souhaité."
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-royal px-6 text-sm font-semibold text-white shadow-button transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <Send size={16} aria-hidden="true" />
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      {status === "success" ? (
        <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          Votre demande a bien été envoyée. Elena vous recontactera prochainement.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", autoComplete, required }: FieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="focus-ring mt-2 h-12 w-full rounded-2xl border border-navy/12 bg-ivory/80 px-4 text-sm text-ink outline-none transition placeholder:text-muted/70"
      />
    </label>
  );
}
