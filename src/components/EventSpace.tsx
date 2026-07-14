"use client";

import { useMemo, useState } from "react";
import { openWhatsApp } from "@/lib/config";
import {
  buildEventEnquiryMessage,
  type EventEnquiryForm,
} from "@/lib/eventEnquiry";
import EventSpaceGallery from "./EventSpaceGallery";
import DatePicker from "./DatePicker";
import {
  WhatsAppIcon,
  UsersIcon,
  SparkIcon,
  CalendarCheckIcon,
  CheckIcon,
} from "./icons";

const eventTypes = [
  "Birthday Parties",
  "Private Celebrations",
  "Corporate Events",
  "Annual Dinners",
  "Product Launches",
  "Social Gatherings",
];

const venueInfo = [
  {
    icon: UsersIcon,
    title: "Venue Capacity",
    lines: [
      "Seating — up to 60",
      "Standing — up to 100",
      "1,000 sq ft",
    ],
  },
  {
    icon: SparkIcon,
    title: "Available Facilities",
    lines: ["To be confirmed"],
  },
  {
    icon: CalendarCheckIcon,
    title: "Food & Beverage Options",
    lines: ["To be confirmed"],
  },
  {
    icon: CheckIcon,
    title: "Event Packages",
    lines: ["Available upon enquiry"],
  },
];

const initialForm: EventEnquiryForm = {
  name: "",
  eventType: "",
  date: "",
  guests: "",
  requirements: "",
};

export default function EventSpace() {
  const [form, setForm] = useState<EventEnquiryForm>(initialForm);
  const [dateError, setDateError] = useState(false);
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const updateField = <K extends keyof EventEnquiryForm>(
    key: K,
    value: EventEnquiryForm[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.date) {
      setDateError(true);
      return;
    }

    openWhatsApp(buildEventEnquiryMessage(form));
  };

  return (
    <section
      id="events"
      className="section-reveal relative border-t border-line/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">Event Space Rental</p>
          <h2 className="display text-4xl sm:text-5xl">
            Host Your Event at Tipsy Plus One
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/65 sm:text-lg">
            A stylish and flexible venue for private celebrations, corporate
            gatherings and special occasions.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
          <EventSpaceGallery />

          <div>
            <p className="text-base leading-relaxed text-cream/65">
              Tipsy Plus One offers a modern and welcoming space for private
              events, birthday celebrations, annual dinners, corporate
              gatherings and social parties. Our venue provides a comfortable
              atmosphere, stylish interior and convenient location for guests.
              Customers can contact our team through WhatsApp to discuss event
              requirements, availability and suitable arrangements.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-cream/40">
                Event Types
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {eventTypes.map((type) => (
                  <li
                    key={type}
                    className="premium-card rounded-full border border-line bg-ink-card/50 px-4 py-2 text-sm text-cream/75"
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {venueInfo.map(({ icon: Icon, title, lines }) => (
                <div
                  key={title}
                  className="premium-card rounded-2xl border border-line bg-ink-card/70 p-5"
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-serif text-base font-medium text-cream">
                      {title}
                    </h3>
                  </div>
                  <ul className="space-y-1 text-sm leading-relaxed text-cream/55">
                    {lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="premium-card mx-auto mt-14 max-w-xl rounded-3xl border border-line bg-ink-card/70 p-6 sm:p-10"
        >
          <p className="mb-6 text-center text-sm leading-relaxed text-cream/60">
            Fill in your event details below and we&apos;ll open WhatsApp with
            your enquiry message ready to send.
          </p>

          <div className="grid gap-5 sm:gap-6">
            <Field label="Name" htmlFor="event-name" required>
              <input
                id="event-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your full name"
                className="field"
              />
            </Field>

            <Field label="Event type" htmlFor="event-type" required>
              <select
                id="event-type"
                required
                value={form.eventType}
                onChange={(event) =>
                  updateField("eventType", event.target.value)
                }
                className="field field-select"
              >
                <option value="" disabled>
                  Select event type
                </option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
              <Field label="Preferred date" htmlFor="event-date" required>
                <DatePicker
                  id="event-date"
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

              <Field
                label="Estimated guests"
                htmlFor="event-guests"
                required
              >
                <input
                  id="event-guests"
                  type="number"
                  required
                  min={1}
                  max={9999}
                  inputMode="numeric"
                  value={form.guests}
                  onChange={(event) =>
                    updateField("guests", event.target.value)
                  }
                  placeholder="e.g. 50"
                  className="field"
                />
              </Field>
            </div>

            <Field
              label="Special requirements"
              htmlFor="event-requirements"
            >
              <textarea
                id="event-requirements"
                rows={3}
                value={form.requirements}
                onChange={(event) =>
                  updateField("requirements", event.target.value)
                }
                placeholder="Catering, AV setup, seating layout, etc."
                className="field field-textarea"
              />
            </Field>
          </div>

          <button
            type="submit"
            className="premium-button premium-glow mt-8 flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-sm font-semibold tracking-wide text-ink shadow-glow"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enquire About Event Space
          </button>

          <p className="mt-4 text-center text-xs leading-relaxed text-cream/45">
            Your details will be pre-filled in WhatsApp. Tap send to confirm
            your enquiry with our team.
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
