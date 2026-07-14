"use client";

import { useMemo, useState } from "react";
import { openWhatsApp } from "@/lib/config";
import {
  buildReservationMessage,
  type ReservationForm,
} from "@/lib/reservation";
import { getReservationTimeSlots } from "@/lib/timeSlots";
import DatePicker from "./DatePicker";
import { WhatsAppIcon } from "./icons";

const initialForm: ReservationForm = {
  name: "",
  phone: "",
  date: "",
  time: "",
  pax: "",
};

export default function Booking() {
  const [form, setForm] = useState<ReservationForm>(initialForm);
  const [dateError, setDateError] = useState(false);
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const timeSlots = useMemo(() => getReservationTimeSlots(), []);

  const updateField = <K extends keyof ReservationForm>(
    key: K,
    value: ReservationForm[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.date) {
      setDateError(true);
      return;
    }

    openWhatsApp(buildReservationMessage(form));
  };

  return (
    <section id="book" className="section-reveal relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Reservations &amp; Enquiries</p>
          <h2 className="display text-4xl sm:text-5xl">Book on WhatsApp</h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream/65">
            Fill in your details below and we&apos;ll open WhatsApp with your
            reservation message ready to send.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="premium-card mx-auto mt-12 max-w-xl rounded-3xl border border-line bg-ink-card/70 p-6 sm:p-10"
        >
          <div className="grid gap-5 sm:gap-6">
            <Field label="Name" htmlFor="reservation-name" required>
              <input
                id="reservation-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your full name"
                className="field"
              />
            </Field>

            <Field label="Phone number" htmlFor="reservation-phone" required>
              <input
                id="reservation-phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="e.g. 012-345 6789"
                className="field"
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
              <Field label="Date" htmlFor="reservation-date" required>
                <DatePicker
                  id="reservation-date"
                  value={form.date}
                  onChange={(date) => {
                    setDateError(false);
                    updateField("date", date);
                  }}
                  min={today}
                  required
                  invalid={dateError}
                />
              </Field>

              <Field label="Time" htmlFor="reservation-time" required>
                <select
                  id="reservation-time"
                  required
                  value={form.time}
                  onChange={(event) => updateField("time", event.target.value)}
                  className="field field-select"
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Number of pax" htmlFor="reservation-pax" required>
              <input
                id="reservation-pax"
                type="number"
                required
                min={1}
                max={999}
                inputMode="numeric"
                value={form.pax}
                onChange={(event) => updateField("pax", event.target.value)}
                placeholder="e.g. 4"
                className="field"
              />
            </Field>
          </div>

          <button
            type="submit"
            className="premium-button premium-glow mt-8 flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-sm font-semibold tracking-wide text-ink shadow-glow"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Continue on WhatsApp
          </button>

          <p className="mt-4 text-center text-xs leading-relaxed text-cream/45">
            Your details will be pre-filled in WhatsApp. Tap send to confirm
            your reservation with our team.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="block">
      <label htmlFor={htmlFor} className="field-label">
        {label}
        {required ? " *" : ""}
      </label>
      {children}
    </div>
  );
}
