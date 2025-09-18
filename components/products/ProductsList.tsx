import { Product } from "@/lib/generated/prisma";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { id, name, image, price, company } = product;
        const dollarsAmount = formatCurrency(price);
        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="grid md:grid-cols-3">
                  <div className="relative h-64 md:h-48 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      priority
                      className="w-full rounded object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold capitalize">{name}</h3>
                    <p className="text-muted-foreground">{company}</p>
                  </div>
                  <p className="mt-2 text-muted-foreground md:ml-auto text-lg   ">
                    {dollarsAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute bottom-8 right-8">
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsList;
