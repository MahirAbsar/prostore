import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { PrismaClient } from "../generated/prisma";
import { convertToPlainObject } from "../utils";

export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(products);
}
