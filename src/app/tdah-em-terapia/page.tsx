import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { contact, navItems } from "@/data/site";

const pageUrl = `${contact.domain}/tdah-em-terapia`;
const instagram = "@tdahemterapia";
const whatsappMessage = encodeURIComponent(
  "Olá, Dom Antônio Carlos. Gostaria de saber mais sobre a Mentoria TDAH em Terapia."
);

const ctaUrl = `${contact.whatsapp}?text=${whatsappMessage}`;

const audienceCards = [
  "Adultos que vivem tentando se organizar, mas abandonam os métodos depois de alguns dias.",
  "Pessoas que dependem da urgência para conseguir agir.",
  "Quem sente culpa, vergonha ou autocobrança excessiva por não conseguir manter rotina.",
  "Quem esquece compromissos, prazos, contas ou tarefas importantes.",
  "Quem começa muitos projetos e tem dificuldade de concluir.",
  "Quem sente que tem potencial, mas não consegue transformar intenção em ação consistente.",
];

const workCards = [
  {
    title: "Estrutura e organização funcional",
    text: "Ajuda o participante a identificar onde sua rotina falha e como criar suportes externos mais simples, visíveis e sustentáveis.",
  },
  {
    title: "Ambiente, processos e suporte emocional",
    text: "A mentoria trabalha os três pilares da Arquitetura Interna: ambiente, processos e suporte emocional.",
  },
  {
    title: "Gestão do tempo",
    text: "O participante aprende a externalizar o tempo, mapear transições, criar margens realistas e reduzir atrasos recorrentes.",
  },
  {
    title: "Procrastinação e dependência da urgência",
    text: "A mentoria investiga por que muitas tarefas só começam quando viram emergência e como reduzir a dependência do pânico como combustível.",
  },
  {
    title: "Culpa, vergonha e autocrítica",
    text: "O trabalho ajuda a diferenciar responsabilidade de humilhação, substituindo julgamento moral por descrição funcional.",
  },
  {
    title: "Retomada após falhas",
    text: "O foco não é criar uma rotina perfeita, mas construir sistemas que possam ser retomados depois de dias difíceis.",
  },
];

const steps = [
  {
    title: "Mapeamento das dificuldades reais",
    text: "Identificação de padrões de desorganização, procrastinação, esquecimento e sobrecarga.",
  },
  {
    title: "Construção da arquitetura pessoal",
    text: "Criação de ajustes simples no ambiente, nos processos e nos sistemas de apoio.",
  },
  {
    title: "Experimentos semanais",
    text: "Cada semana trabalha um ajuste prático, pequeno e observável.",
  },
  {
    title: "Acompanhamento da evolução",
    text: "Uso de indicadores simples para acompanhar clareza, culpa, sobrecarga, dependência da urgência e capacidade de retomada.",
  },
];

const journeyTopics = [
  "Você não é desorganizado: está sem estrutura.",
  "Os três pilares da Arquitetura Interna.",
  "Por que o caos sempre volta?",
  "O tempo precisa sair da cabeça.",
  "Procrastinação, urgência e adrenalina.",
  "Memória operacional e sistemas externos.",
  "Ambiente como ferramenta de organização.",
  "Rotina mínima para dias difíceis.",
  "Como retomar sem recomeçar do zero.",
  "Clareza, direção e continuidade.",
];

export const metadata: Metadata = {
  title: "TDAH em Terapia | Mentoria para Adultos com TDAH",
  description:
    "Mentoria psicoeducativa e funcional para adultos com TDAH que desejam construir rotina, organização, gestão do tempo e estrutura interna com mais clareza e menos culpa.",
  keywords: [
    "TDAH em adultos",
    "mentoria para TDAH",
    "TDAH em terapia",
    "organização para adultos com TDAH",
    "gestão do tempo TDAH",
    "procrastinação TDAH",
    "rotina para TDAH",
    "Arquitetura Interna",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "TDAH em Terapia | Mentoria para Adultos com TDAH",
    description:
      "Mentoria psicoeducativa e funcional para adultos com TDAH que desejam construir rotina, organização, gestão do tempo e estrutura interna com mais clareza e menos culpa.",
    url: pageUrl,
    siteName: "Dom Antônio Carlos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/dom-antonio-carlos-tdah-contemporaneo.png",
        width: 1200,
        height: 1600,
        alt: "Dom Antônio Carlos em imagem contemporânea para conteúdo sobre TDAH adulto.",
      },
    ],
  },
};

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/92 text-white backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="font-serif text-xl font-bold">
          Dom Antônio Carlos
        </Link>
        <nav className="hidden items-center gap-3 text-sm xl:flex 2xl:gap-4" aria-label="Menu principal">
          {navItems.map((item) => {
            const href = item.href.startsWith("#") ? `/${item.href}` : item.href;
            return (
              <Link key={item.href} href={href} className="whitespace-nowrap text-white/78 transition hover:text-white">
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a
          href={contact.whatsapp}
          className="hidden min-h-12 items-center justify-center rounded px-5 font-bold text-ink shadow-[0_14px_32px_rgba(196,162,95,0.24)] transition hover:-translate-y-px lg:inline-flex lg:bg-gold"
        >
          Falar pelo WhatsApp
        </a>
      </div>
    </header>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "paper",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  tone?: "paper" | "mist" | "ink";
}) {
  const toneClass = {
    paper: "bg-paper text-ink",
    mist: "bg-mist text-ink",
    ink: "bg-ink text-white",
  }[tone];

  return (
    <section id={id} className={`${toneClass} py-20 md:py-28`}>
      <div className="container">
        <div className="max-w-3xl">
          {eyebrow ? <p className={`eyebrow ${tone === "ink" ? "text-gold" : ""}`}>{eyebrow}</p> : null}
          <h2 className="section-title mt-3">{title}</h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function TdahEmTerapiaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[92svh] overflow-hidden bg-ink pt-28 text-white">
          <Image
            src="/images/dom-antonio-carlos-tdah-contemporaneo.png"
            alt="Imagem contemporânea de Dom Antônio Carlos para a página TDAH em Terapia."
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_42%] opacity-42"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/38" />
          <div className="container relative grid min-h-[calc(92svh-7rem)] items-center pb-16">
            <div className="max-w-3xl">
              <p className="eyebrow text-gold">Mentoria Arquitetura Interna</p>
              <h1 className="mt-5 font-serif text-[2.5rem] font-bold leading-[1] sm:text-5xl md:text-7xl">
                TDAH em Terapia
              </h1>
              <h2 className="mt-5 text-2xl font-semibold text-white/92 md:text-3xl">
                Mentoria Arquitetura Interna para Adultos com TDAH
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                Um acompanhamento psicoeducativo e funcional para adultos com TDAH que desejam construir rotina, organização, clareza e direção sem depender apenas de culpa, urgência ou força de vontade.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contato-tdah" className="button-primary">Quero conhecer a mentoria</a>
                <a href={ctaUrl} className="button-secondary">Falar pelo WhatsApp</a>
              </div>
              <p className="mt-6 inline-flex border-l-2 border-gold pl-4 text-sm font-semibold text-white/78">
                Instagram: {instagram}
              </p>
            </div>
          </div>
        </section>

        <Section eyebrow="Para quem é" title="Para quem é a Mentoria TDAH em Terapia?">
          <p className="max-w-4xl text-lg leading-8 text-ink/76">
            Esta mentoria foi pensada para adultos com TDAH diagnosticado ou com fortes indícios de dificuldades funcionais relacionadas à atenção, organização, gestão do tempo, procrastinação, impulsividade, esquecimento, acúmulo de tarefas e sensação constante de desorganização interna.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {audienceCards.map((item) => (
              <article key={item} className="border border-ink/10 bg-white p-6 shadow-[0_14px_44px_rgba(9,36,58,0.06)]">
                <p className="leading-7 text-ink/76">{item}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section tone="mist" eyebrow="Ideia central" title="Você não é desorganizado. Você está sem estrutura.">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5 text-lg leading-8 text-ink/76">
              <p>
                A proposta da Mentoria Arquitetura Interna não é tratar a dificuldade cotidiana como falha de caráter. O objetivo é ajudar o participante a compreender onde sua vida depende excessivamente da memória, da urgência, da culpa e da força de vontade, e construir estruturas externas mais compatíveis com seu funcionamento.
              </p>
              <p>
                Em vez de perguntar “por que eu sou assim?”, a mentoria propõe perguntas mais úteis.
              </p>
            </div>
            <div className="border-l-2 border-gold bg-white p-7 shadow-[0_14px_44px_rgba(9,36,58,0.06)]">
              <p className="text-xl font-bold leading-8">Qual sistema está ausente?</p>
              <p className="mt-4 text-xl font-bold leading-8">Qual barreira invisível dificulta essa tarefa?</p>
              <p className="mt-4 text-xl font-bold leading-8">O que precisa sair da minha cabeça e entrar no ambiente?</p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Conteúdo" title="O que será trabalhado na mentoria">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workCards.map((card) => (
              <article key={card.title} className="min-h-64 border border-ink/10 bg-white p-6 shadow-[0_14px_44px_rgba(9,36,58,0.06)]">
                <h3 className="text-xl font-bold leading-7">{card.title}</h3>
                <p className="mt-4 leading-7 text-ink/72">{card.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section tone="ink" eyebrow="Formato" title="Como funciona a Mentoria Arquitetura Interna">
          <p className="max-w-4xl text-lg leading-8 text-white/78">
            A mentoria é estruturada em encontros individuais ou em grupo reduzido, com duração média de 75 a 90 minutos, combinando psicoeducação, reflexão guiada, exercícios práticos e experimentos semanais.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title} className="border border-white/12 bg-white/5 p-6">
                <span className="font-serif text-3xl text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section tone="mist" eyebrow="Jornada" title="Alguns temas trabalhados na jornada">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {journeyTopics.map((topic) => (
              <div key={topic} className="border border-ink/10 bg-white px-5 py-4 font-semibold leading-6">
                {topic}
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Abordagem" title="Uma abordagem prática, humana e sem julgamento">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <p className="text-lg leading-8 text-ink/76">
              A Mentoria TDAH em Terapia une psicoeducação, organização funcional, inteligência emocional, coaching e uma leitura psicanalítica da autocrítica. O objetivo não é romantizar o TDAH nem transformar toda dificuldade em diagnóstico. O objetivo é construir uma forma mais realista, responsável e possível de funcionar.
            </p>
            <blockquote className="border-l-2 border-gold bg-mist p-7 font-serif text-2xl leading-9 text-ink">
              Responsabilidade não é humilhação. Responsabilidade é construir uma solução mais adequada depois de observar onde o processo falhou.
            </blockquote>
          </div>
        </Section>

        <Section tone="mist" eyebrow="Limites éticos" title="Importante">
          <div className="border border-ink/10 bg-white p-7 shadow-[0_14px_44px_rgba(9,36,58,0.06)]">
            <p className="text-lg leading-8 text-ink/76">
              A Mentoria TDAH em Terapia possui finalidade psicoeducativa e funcional. Ela não realiza diagnóstico, não substitui psicoterapia, avaliação médica, tratamento psiquiátrico ou acompanhamento psicológico. Em casos de sofrimento intenso, prejuízo grave, ideação suicida, uso problemático de substâncias, depressão, ansiedade severa ou outros quadros clínicos relevantes, recomenda-se buscar avaliação profissional adequada.
            </p>
          </div>
        </Section>

        <section id="contato-tdah" className="bg-ink py-20 text-white md:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow text-gold">Próximo passo</p>
              <h2 className="section-title mt-3">Quer construir uma rotina mais compatível com seu funcionamento?</h2>
              <p className="mt-6 text-lg leading-8 text-white/76">
                Se você sente que vive apagando incêndios, esquecendo tarefas, acumulando pendências e se culpando por não conseguir sustentar organização, a Mentoria TDAH em Terapia pode ajudar você a construir uma arquitetura mais funcional para sua vida.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={ctaUrl} className="button-primary">Falar pelo WhatsApp</a>
                <Link href="/" className="button-secondary">Voltar ao site principal</Link>
              </div>
            </div>
            <aside className="border border-white/12 bg-white/5 p-7">
              <h3 className="text-2xl font-bold">Contato</h3>
              <div className="mt-5 space-y-3 text-white/82">
                <p><strong>WhatsApp:</strong> {contact.phone}</p>
                <p><strong>E-mail:</strong> {contact.email}</p>
                <p><strong>Instagram:</strong> {instagram}</p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="bg-[#061928] py-10 text-white">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-xl font-bold">Dom Antônio Carlos</p>
            <p className="mt-2 text-sm text-white/64">TDAH em Terapia, saúde emocional e reorganização funcional.</p>
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
