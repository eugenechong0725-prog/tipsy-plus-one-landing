/**
 * Central business config — Tipsy Plus One (TPO)
 */
export const site = {
  name: "Tipsy Plus One",
  wordmark: "Tipsy Plus One",
  shortName: "TPO",
  logo: "/brand/tpo-logo.png",
  tagline: "Bar & Event Space",

  // WhatsApp — digits only, no +, spaces or dashes
  whatsappNumber: "60103878706",
  whatsappMessage: "Hi, I would like to book a table at Tipsy Plus One.",
  whatsappEventMessage:
    "Hi, I would like to enquire about the event space at Tipsy Plus One.",
  whatsappEventSpaceMessage: `Hi Tipsy Plus One, I would like to enquire about your event space.

Name:
Event Type:
Preferred Date:
Estimated Number of Guests:
Special Requirements:`,
  whatsappMenuMessage:
    "Hi! I'm interested in visiting. Could you send me your menu? 😊",
  phoneDisplay: "+6010-387 8706",
  email: "info@tipsyplusone.com",

  location: {
    label: "Tipsy Plus One - TPO",
    venue:
      "Megah Rise Mall, Lot 1-3, Level 1, 3, Jalan SS 24/9, Taman Megah, 47301 Petaling Jaya, Selangor",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Megah+Rise+Mall%2C+Lot+1-3%2C+Level+1%2C+3%2C+Jalan+SS+24%2F9%2C+Taman+Megah%2C+47301+Petaling+Jaya%2C+Selangor",
  },

  hours: [{ day: "Mon – Sun", time: "11:00 AM – 1:00 AM" }],

  social: {
    instagram:
      "https://www.instagram.com/tipsyplus.one?igsh=MWswODhiMjJ1Y2U4aQ==",
    facebook: "https://www.facebook.com/share/1MSynnhoso/?mibextid=wwXIfr",
  },
} as const;

/** Build a WhatsApp click-to-chat link with a prefilled message. */
export function whatsappLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Open WhatsApp in a new tab / app with a prefilled message. */
export function openWhatsApp(message: string): void {
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}
