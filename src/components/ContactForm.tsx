"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/data/site";

const initialForm = {
  nome: "",
  empresa: "",
  cargo: "",
  email: "",
  telefone: "",
  publico: "",
  tema: "",
  mensagem: "",
  consentimento: false,
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);

  function update(name: keyof typeof initialForm, value: string | boolean) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Olá, Dom Antônio Carlos. Gostaria de solicitar uma proposta.",
      "",
      `Nome: ${form.nome}`,
      `Empresa ou instituição: ${form.empresa}`,
      `Cargo: ${form.cargo}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      `Público estimado: ${form.publico}`,
      `Tema de interesse: ${form.tema}`,
      `Mensagem: ${form.mensagem}`,
      "",
      "Confirmo o consentimento para envio das informações para contato.",
    ].join("\n");

    // Future enhancement: add an email integration or API endpoint before persisting any data.
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Formulário de solicitação de proposta">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Nome
          <input className="field" required value={form.nome} onChange={(e) => update("nome", e.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Empresa ou instituição
          <input className="field" required value={form.empresa} onChange={(e) => update("empresa", e.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Cargo
          <input className="field" value={form.cargo} onChange={(e) => update("cargo", e.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          E-mail
          <input className="field" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Telefone
          <input className="field" required value={form.telefone} onChange={(e) => update("telefone", e.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Público estimado
          <input className="field" value={form.publico} onChange={(e) => update("publico", e.target.value)} />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Tema de interesse
        <select className="field" required value={form.tema} onChange={(e) => update("tema", e.target.value)}>
          <option value="">Selecione uma opção</option>
          <option>Método T.E.M.P.E.R.O.</option>
          <option>Riscos psicossociais e NR-1</option>
          <option>TDAH adulto no trabalho</option>
          <option>TDAH em Terapia</option>
          <option>Saúde emocional de lideranças</option>
          <option>Saúde mental de professores</option>
          <option>Psicanálise para adultos</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Mensagem
        <textarea className="field min-h-32 resize-y" value={form.mensagem} onChange={(e) => update("mensagem", e.target.value)} />
      </label>
      <label className="flex items-start gap-3 text-sm text-ink/75">
        <input
          className="mt-1 size-4"
          type="checkbox"
          required
          checked={form.consentimento}
          onChange={(e) => update("consentimento", e.target.checked)}
        />
        Autorizo o envio destas informações para que eu receba retorno sobre palestras, workshops, ações formativas ou atendimento.
      </label>
      <button className="button-primary w-full md:w-fit" type="submit">
        Solicitar proposta personalizada
      </button>
    </form>
  );
}
