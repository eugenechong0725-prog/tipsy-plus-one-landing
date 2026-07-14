export type ReservationForm = {
  name: string;
  phone: string;
  date: string;
  time: string;
  pax: string;
};

/** Build the WhatsApp message from reservation form values. */
export function buildReservationMessage(form: ReservationForm): string {
  const formattedDate = form.date
    ? new Date(`${form.date}T12:00:00`).toLocaleDateString("en-MY", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : form.date;

  return [
    "Hi Tipsy Plus One, I would like to make a reservation/enquiry.",
    "",
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    `Date: ${formattedDate}`,
    `Time: ${form.time.trim()}`,
    `Pax: ${form.pax.trim()}`,
  ].join("\n");
}
