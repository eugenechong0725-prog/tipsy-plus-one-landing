export type EventEnquiryForm = {
  name: string;
  eventType: string;
  date: string;
  guests: string;
  requirements: string;
};

/** Build the WhatsApp message from event space enquiry form values. */
export function buildEventEnquiryMessage(form: EventEnquiryForm): string {
  const formattedDate = form.date
    ? new Date(`${form.date}T12:00:00`).toLocaleDateString("en-MY", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return [
    "Hi Tipsy Plus One, I would like to enquire about your event space.",
    "",
    `Name: ${form.name.trim()}`,
    `Event Type: ${form.eventType.trim()}`,
    `Preferred Date: ${formattedDate}`,
    `Estimated Number of Guests: ${form.guests.trim()}`,
    `Special Requirements: ${form.requirements.trim() || "—"}`,
  ].join("\n");
}
