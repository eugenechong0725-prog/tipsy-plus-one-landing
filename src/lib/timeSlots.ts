export type TimeSlot = {
  value: string;
  label: string;
};

function formatTimeLabel(hour24: number, minute: number): string {
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  const minuteLabel = minute === 0 ? "00" : String(minute);
  return `${hour12}:${minuteLabel} ${period}`;
}

/** 30-minute slots aligned with venue hours: 11:00 AM – 1:00 AM. */
export function getReservationTimeSlots(): TimeSlot[] {
  const slots: TimeSlot[] = [];

  for (let hour = 11; hour <= 23; hour += 1) {
    for (const minute of [0, 30]) {
      const label = formatTimeLabel(hour, minute);
      slots.push({ value: label, label });
    }
  }

  for (const minute of [0, 30]) {
    const label = formatTimeLabel(0, minute);
    slots.push({ value: label, label });
  }

  slots.push({ value: "1:00 AM", label: "1:00 AM" });

  return slots;
}
