import type { Metadata } from "next";
import "./globals.css";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(contact.domain),
  title: "Dom Antônio Carlos | Palestras sobre saúde emocional, TDAH adulto e NR-1",
  description:
    "Palestras, workshops e ações formativas para empresas, escolas e instituições. Saúde emocional, TDAH adulto, riscos psicossociais, liderança e prevenção de sobrecarga.",
  openGraph: {
    title: "Dom Antônio Carlos | Saúde emocional, TDAH adulto e NR-1",
    description:
      "Palestras, workshops e ações formativas para empresas, escolas e instituições.",
    url: contact.domain,
    siteName: "Dom Antônio Carlos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/dom-antonio-carlos-palestrante-auditorio.png",
        width: 1200,
        height: 1600,
        alt: "Dom Antônio Carlos palestrando em auditório.",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
