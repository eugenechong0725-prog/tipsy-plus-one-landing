"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const;
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

type DatePickerProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  min?: string;
  required?: boolean;
  invalid?: boolean;
};

function parseIsoDate(iso: string): Date {
  return new Date(`${iso}T12:00:00`);
}

function toIsoDate(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function formatDisplayDate(iso: string): string {
  return parseIsoDate(iso).toLocaleDateString("en-MY", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export default function DatePicker({
  id,
  value,
  onChange,
  min,
  required,
  invalid,
}: DatePickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const minDate = useMemo(
    () => startOfDay(min ? parseIsoDate(min) : new Date()),
    [min],
  );
  const [viewDate, setViewDate] = useState(() =>
    value ? parseIsoDate(value) : minDate,
  );

  useEffect(() => {
    if (value) {
      setViewDate(parseIsoDate(value));
    }
  }, [value]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target;
      if (
        target instanceof Node &&
        containerRef.current &&
        !containerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [open]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();
  const minMonth = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  const viewMonth = new Date(year, month, 1);
  const canGoPrev = viewMonth > minMonth;

  const selectDate = (day: number) => {
    const iso = toIsoDate(year, month, day);
    onChange(iso);
    setOpen(false);
  };

  const goPrevMonth = () => {
    if (!canGoPrev) return;
    setViewDate(new Date(year, month - 1, 1));
  };

  const goNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        id={id}
        type="button"
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }

          if (event.key === "Escape") {
            setOpen(false);
          }
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-required={required}
        className={`field field-select flex items-center text-left cursor-pointer ${
          value ? "text-cream" : "text-cream/30"
        } ${invalid ? "border-gold/70 ring-2 ring-gold/15" : ""}`}
      >
        {value ? formatDisplayDate(value) : "Select date"}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Choose reservation date"
          className="picker-popover absolute left-0 right-0 z-20 mt-2 rounded-2xl border border-line bg-ink-card p-4 shadow-[0_24px_70px_-40px_rgba(201,162,75,0.55)] sm:p-5"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goPrevMonth}
              disabled={!canGoPrev}
              aria-label="Previous month"
              className="picker-nav-button"
            >
              ‹
            </button>
            <p className="font-serif text-base text-cream sm:text-lg">
              {MONTHS[month]} {year}
            </p>
            <button
              type="button"
              onClick={goNextMonth}
              aria-label="Next month"
              className="picker-nav-button"
            >
              ›
            </button>
          </div>

          <div className="picker-weekdays">
            {WEEKDAYS.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="picker-days">
            {Array.from({ length: firstWeekday }).map((_, index) => (
              <span key={`empty-${index}`} aria-hidden="true" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const date = new Date(year, month, day);
              const iso = toIsoDate(year, month, day);
              const isDisabled = date < minDate;
              const isSelected = value === iso;
              const isToday = iso === toIsoDate(
                minDate.getFullYear(),
                minDate.getMonth(),
                minDate.getDate(),
              );

              return (
                <button
                  key={iso}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => selectDate(day)}
                  aria-label={formatDisplayDate(iso)}
                  aria-pressed={isSelected}
                  className={`picker-day ${isSelected ? "picker-day-selected" : ""} ${isToday && !isSelected ? "picker-day-today" : ""}`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
