import type { FormPayload } from "./form-schemas";

export const WHATSAPP_NUMBER = "919589208322";

const formLabels: Record<FormPayload["formType"], string> = {
  admission: "Admission Application",
  contact: "Contact Inquiry",
  "book-tour": "School Tour Booking",
  "landing-enquiry": "Admission Enquiry",
};

function linesForPayload(payload: FormPayload): string[] {
  const lines = [
    `*New ${formLabels[payload.formType]}*`,
    "",
  ];

  if (payload.studentName) lines.push(`*Student:* ${payload.studentName}`);
  if (payload.dateOfBirth) lines.push(`*Date of Birth:* ${payload.dateOfBirth}`);
  if (payload.gender) lines.push(`*Gender:* ${payload.gender}`);
  if (payload.program) lines.push(`*Program:* ${payload.program}`);
  if (payload.parentName) lines.push(`*Parent/Name:* ${payload.parentName}`);
  if (payload.phone) lines.push(`*Phone:* ${payload.phone}`);
  if (payload.email) lines.push(`*Email:* ${payload.email}`);
  if (payload.address) lines.push(`*Address:* ${payload.address}`);
  if (payload.child) lines.push(`*Child:* ${payload.child}`);
  if (payload.tourDate) lines.push(`*Tour Date:* ${payload.tourDate}`);
  if (payload.tourTime) lines.push(`*Tour Time:* ${payload.tourTime}`);
  if (payload.message) lines.push(`*Message:* ${payload.message}`);

  lines.push("", "Hi Kidzee jeetshree team, please confirm my request. Thank you!");
  return lines;
}

export function buildWhatsAppMessage(payload: FormPayload): string {
  return linesForPayload(payload).join("\n");
}

export function buildWhatsAppUrl(payload: FormPayload): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(payload))}`;
}

export function openWhatsAppForForm(payload: FormPayload): void {
  window.open(buildWhatsAppUrl(payload), "_blank", "noopener,noreferrer");
}
