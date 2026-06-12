import Link from "next/link";
import { contact } from "@/data/site";

export const metadata = {
  title: "Política de privacidade | Dom Antônio Carlos",
  description: "Política de privacidade da página institucional de Dom Antônio Carlos.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-paper py-16 text-ink">
      <article className="container max-w-3xl">
        <Link href="/" className="button-quiet mb-10">Voltar ao site</Link>
        <p className="eyebrow">Privacidade</p>
        <h1 className="section-title mt-3">Política de privacidade</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-ink/76">
          <p>As informações enviadas pelo formulário têm a finalidade exclusiva de permitir o contato sobre palestras, workshops, ações formativas ou atendimento psicanalítico.</p>
          <p>Os dados coletados podem incluir nome, empresa ou instituição, cargo, e-mail, telefone, público estimado, tema de interesse e mensagem enviada voluntariamente.</p>
          <p>Os dados não são comercializados, vendidos ou compartilhados para fins de publicidade de terceiros.</p>
          <p>Na primeira versão do site, o formulário abre uma conversa no WhatsApp com os dados preenchidos e não cria banco de dados próprio.</p>
          <p>Para solicitar exclusão de informações ou esclarecer dúvidas sobre privacidade, entre em contato pelo e-mail {contact.email}.</p>
        </div>
      </article>
    </main>
  );
}
