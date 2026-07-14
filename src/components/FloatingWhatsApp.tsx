import { whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book Now on WhatsApp"
      className="premium-button premium-glow floating-whatsapp-enter fixed bottom-5 right-4 z-50 inline-flex items-center gap-2.5 rounded-full bg-gold px-5 py-3.5 text-ink shadow-[0_4px_24px_rgba(201,162,75,0.45)] sm:bottom-6 sm:right-6 sm:gap-2 sm:px-4 sm:py-3"
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
      <span className="text-sm font-semibold leading-tight sm:hidden">
        Book Now on WhatsApp
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Book Now</span>
    </a>
  );
}
