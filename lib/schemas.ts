import { CategoryType } from "@prisma/client";
import { z } from "zod";

export const feedbackFormSchema = z.object({
  title: z.string().min(4).max(128),
  detail: z.string().max(250),
  catogory: z.nativeEnum(CategoryType),
});


