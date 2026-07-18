import { z } from "zod";

export const formTypes = ["admission", "contact", "book-tour", "landing-enquiry"] as const;

export type FormType = (typeof formTypes)[number];

export const formPayloadSchema = z.object({
  formType: z.enum(formTypes),
  studentName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.string().optional(),
  program: z.string().optional(),
  parentName: z.string().optional(),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email().optional().or(z.literal("")),
  address: z.string().optional(),
  child: z.string().optional(),
  tourDate: z.string().optional(),
  tourTime: z.string().optional(),
  message: z.string().optional(),
});

export type FormPayload = z.infer<typeof formPayloadSchema>;
