import { contact } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsapp}
      className="fixed bottom-5 right-5 z-50 inline-flex size-12 items-center justify-center rounded-full bg-petrol text-white shadow-soft"
      aria-label="Conversar pelo WhatsApp"
    >
      <span aria-hidden="true" className="text-lg font-bold">W</span>
    </a>
  );
}
