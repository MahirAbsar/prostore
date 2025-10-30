import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";
import { Prisma } from "@prisma/client";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  price: string;
  rating: string;
  createdAt: Date;
};
