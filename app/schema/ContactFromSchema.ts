import { z } from "zod";

export const ContactFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().min(1).email(),
  phone: z.string().optional(),
  message: z.string().optional(),
});
