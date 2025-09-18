import { Prisma, PrismaClient } from "@/lib/generated/prisma";
import products from "./products.json";

const prisma = new PrismaClient();

export async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main();
