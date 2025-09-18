import { Product } from "@/lib/generated/prisma";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => {
        const { id, name, image, price } = product;
        const dollarsAmount = formatCurrency(price);
        return (
          <article key={id} className="relative group">
            <Link href={`/products/${id}`}>
              <Card className="group-hover:shadow-xl transition-shadow duration-500">
                <CardContent>
                  <div className="relative h-64 md:h-48 overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      priority
                      sizes="(max-width:768px) 100vw, (max-width:1200) 50vw, 33vw"
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg capitalize">{name}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {dollarsAmount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-8 right-8 z-5">
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
