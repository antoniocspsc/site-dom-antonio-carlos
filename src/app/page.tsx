import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FutureSections } from "@/components/FutureSections";
import { audiences, contact, lectures, navItems, temperoSteps } from "@/data/site";

function WhatsAppLink({ children, className = "button-primary" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={contact.whatsapp} className={className}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/92 text-white backdrop-blur">
        <div className="container flex min-h-20 items-center justify-between gap-4">
          <a href="#inicio" className="font-serif text-xl font-bold">
            Dom Antônio Carlos
          </a>
          <nav className="hidden items-center gap-4 text-sm xl:flex" aria-label="Menu principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/78 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={contact.whatsapp}
            className="hidden min-h-12 items-center justify-center rounded px-5 font-bold text-ink shadow-[0_14px_32px_rgba(196,162,95,0.24)] transition hover:-translate-y-px lg:inline-flex lg:bg-gold"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative min-h-[92svh] overflow-hidden bg-ink pt-28 text-white">
          <Image
            src="/images/dom-antonio-carlos-palestrante-auditorio.png"
            alt="Dom Antônio Carlos palestrando em auditório para profissionais."
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_42%] opacity-48"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/35" />
          <div className="container relative grid min-h-[calc(92svh-7rem)] items-center pb-16">
            <div className="max-w-3xl">
              <p className="eyebrow text-gold">Palestras, workshops e ações formativas</p>
              <h1 className="mt-5 font-serif text-[2.25rem] font-bold leading-[1] sm:text-5xl md:text-7xl">
                DOM ANTÔNIO CARLOS
              </h1>
              <h2 className="mt-5 text-2xl font-semibold text-white/92 md:text-3xl">
                Saúde emocional para pessoas e organizações sob pressão
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                Palestras, workshops e ações formativas para empresas, instituições de ensino, sindicatos, associações e órgãos públicos.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">
                Conteúdos que unem profundidade humana, linguagem acessível e aplicação prática para enfrentar sobrecarga, relações desgastadas e desafios emocionais no trabalho.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contato" className="button-primary">Solicitar uma proposta</a>
                <a href="#metodo" className="button-secondary">Conhecer o Método T.E.M.P.E.R.O.</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper py-20 md:py-28" id="problemas">
          <div className="container grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="eyebrow">Problemas organizacionais</p>
              <h2 className="section-title mt-3">Pressão constante não é sinônimo de produtividade</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-ink/76">
              <p>Ambientes profissionais exigentes podem gerar desgaste emocional, conflitos, queda de concentração, dificuldade para estabelecer limites e perda progressiva de qualidade nas relações.</p>
              <p>Quando esses sinais são ignorados, os impactos aparecem na comunicação, no desempenho, na convivência e na permanência das pessoas na organização.</p>
              <p>Palestras isoladas não resolvem problemas estruturais. Entretanto, ações educativas bem conduzidas podem ampliar a percepção dos riscos, estimular responsabilidade coletiva e abrir caminhos para mudanças consistentes.</p>
            </div>
          </div>
        </section>

        <section id="metodo" className="bg-mist py-20 md:py-28">
          <div className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Método T.E.M.P.E.R.O.</p>
              <h2 className="section-title mt-3">Reorganização emocional para pessoas sob pressão</h2>
              <p className="mt-6 text-lg leading-8 text-ink/76">
                O Método T.E.M.P.E.R.O. foi desenvolvido para ajudar pessoas, equipes e lideranças a reconhecer excessos, identificar padrões de desgaste, preservar vínculos e responder às pressões cotidianas com maior consciência emocional.
              </p>
              <p className="mt-4 text-lg leading-8 text-ink/76">
                O método pode ser aplicado em palestras, workshops e programas formativos adaptados ao perfil da organização.
              </p>
              <a href="#contato" className="button-quiet mt-8">Conhecer o método completo</a>
            </div>
            <ol className="grid gap-3">
              {temperoSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-4 border-b border-ink/10 bg-white px-5 py-4">
                  <span className="font-serif text-2xl text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-semibold">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="palestras" className="bg-paper py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="eyebrow">Palestras e treinamentos</p>
              <h2 className="section-title mt-3">Ações formativas para saúde emocional, liderança, educação e TDAH adulto</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lectures.map((lecture) => (
                <article key={lecture.title} className="min-h-64 border border-ink/10 bg-white p-6 shadow-[0_14px_44px_rgba(9,36,58,0.06)]">
                  <h3 className="text-xl font-bold leading-7">{lecture.title}</h3>
                  <p className="mt-4 leading-7 text-ink/72">{lecture.text}</p>
                </article>
              ))}
            </div>
            <a href="#contato" className="button-primary mt-10">Solicitar uma proposta personalizada</a>
          </div>
        </section>

        <section id="nr1" className="bg-ink py-20 text-white md:py-28">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/dom-antonio-carlos-tdah-contemporaneo.png"
                alt="Retrato contemporâneo de Dom Antônio Carlos em iluminação azul e vermelha."
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow text-gold">Empresas e NR-1</p>
              <h2 className="section-title mt-3">Riscos psicossociais com responsabilidade técnica e linguagem acessível</h2>
              <p className="mt-6 text-lg leading-8 text-white/78">
                Ação educativa complementar para ampliar a conscientização sobre fatores de risco psicossocial, saúde emocional e responsabilidade organizacional.
              </p>
              <div className="mt-8 border-l-2 border-gold pl-6 text-white/72">
                As atividades relacionadas à NR-1 possuem caráter educativo e complementar. Não substituem avaliações técnicas, diagnósticos organizacionais, GRO, PGR, PCMSO, documentos obrigatórios ou atuação de profissionais habilitados em SST.
              </div>
            </div>
          </div>
        </section>

        <section id="educacao" className="bg-mist py-20 md:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Educação</p>
              <h2 className="section-title mt-3">Formações para professores, gestores e instituições de ensino</h2>
              <p className="mt-6 text-lg leading-8 text-ink/76">
                Saúde mental de professores, educação, inclusão e desafios neuropsicológicos são temas trabalhados com atenção à sobrecarga, aos conflitos, à comunicação e ao manejo de situações complexas.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Image
                src="/images/dom-antonio-carlos-palestra-educacao-publico.png"
                alt="Dom Antônio Carlos em palestra sobre educação diante de público."
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
              <Image
                src="/images/dom-antonio-carlos-palestra-saude-mental-professor.png"
                alt="Dom Antônio Carlos em apresentação sobre saúde mental do professor."
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-paper py-20 md:py-28">
          <div className="container">
            <p className="eyebrow">Públicos atendidos</p>
            <h2 className="section-title mt-3 max-w-3xl">Para quem são as palestras</h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((audience) => (
                <div key={audience} className="border border-ink/10 bg-white px-5 py-4 font-semibold">
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-mist py-20 md:py-28">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink shadow-soft">
              <Image
                src="/images/dom-antonio-carlos-retrato-institucional.png"
                alt="Retrato institucional de Dom Antônio Carlos."
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow">Sobre</p>
              <h2 className="section-title mt-3">Sobre Dom Antônio Carlos</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-ink/76">
                <p>Dom Antônio Carlos é psicanalista, palestrante e formador em temas relacionados à saúde emocional, TDAH adulto, relações humanas e desenvolvimento profissional.</p>
                <p>Possui formação em Direito e estudos de pós-graduação em áreas como Psicanálise, Neuropsicanálise, Práticas Sistêmicas, Docência do Ensino Superior e Gestão de Pessoas.</p>
                <p>Seu trabalho integra escuta, reflexão e aplicação prática, respeitando os limites éticos de cada campo de atuação.</p>
                <p>As palestras são estruturadas de acordo com o perfil do público, o contexto institucional e os objetivos de cada organização.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="psicanalise" className="bg-paper py-20 md:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="eyebrow">Atuação clínica</p>
              <h2 className="section-title mt-3">Psicanálise para adultos</h2>
              <p className="mt-6 text-lg leading-8 text-ink/76">
                Atendimento para pessoas que desejam compreender melhor suas emoções, relações, conflitos e padrões que se repetem.
              </p>
              <p className="mt-4 text-lg leading-8 text-ink/76">
                O trabalho também dedica atenção especial aos desafios vividos por adultos com TDAH, como dificuldades de organização, sobrecarga, procrastinação, impulsividade e regulação emocional.
              </p>
              <div className="mt-8 grid gap-2 font-semibold">
                <p>Atendimento presencial em {contact.location}.</p>
                <p>Atendimento online para todo o Brasil.</p>
              </div>
              <WhatsAppLink className="button-primary mt-8">Conversar pelo WhatsApp</WhatsAppLink>
            </div>
            <aside className="border border-ink/10 bg-mist p-7">
              <h3 className="text-2xl font-bold">Limites técnicos e éticos</h3>
              <p className="mt-4 leading-7 text-ink/74">
                As palestras, workshops e ações educativas não substituem avaliações clínicas, diagnósticos organizacionais, programas ocupacionais ou documentos obrigatórios elaborados por profissionais habilitados.
              </p>
              <p className="mt-4 leading-7 text-ink/74">
                Quando relacionadas à NR-1 e a riscos psicossociais, as atividades possuem caráter educativo e complementar.
              </p>
            </aside>
          </div>
        </section>

        <section id="contato" className="bg-ink py-20 text-white md:py-28">
          <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-gold">Solicite uma proposta</p>
              <h2 className="section-title mt-3">Informe o perfil da instituição e o objetivo da atividade</h2>
              <p className="mt-6 text-lg leading-8 text-white/76">
                A proposta será estruturada de acordo com sua necessidade.
              </p>
              <div className="mt-8 space-y-3 text-white/86">
                <p><strong>WhatsApp:</strong> {contact.phone}</p>
                <p><strong>E-mail:</strong> {contact.email}</p>
              </div>
              <WhatsAppLink className="button-secondary mt-8">Falar pelo WhatsApp</WhatsAppLink>
            </div>
            <div className="bg-paper p-5 text-ink shadow-soft md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
        <FutureSections />
      </main>

      <footer className="bg-[#061928] py-10 text-white">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-xl font-bold">Dom Antônio Carlos</p>
            <p className="mt-2 text-sm text-white/64">Saúde emocional, TDAH adulto, liderança, educação e riscos psicossociais.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/72">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <Link href="/politica-de-privacidade">Política de privacidade</Link>
          </div>
        </div>
      </footer>
      <FloatingWhatsApp />
    </>
  );
}
