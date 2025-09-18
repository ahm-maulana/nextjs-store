import { fetchAllProducts } from "@/utils/actions";
import { Button } from "../ui/button";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Separator } from "../ui/separator";
import Link from "next/link";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import ProductSearch from "./ProductSearch";

async function ProductsContainer({
  search,
  layout,
}: {
  search: string;
  layout: string;
}) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <section>
      <ProductSearch />
      <div className="mt-8 flex justify-between items-center">
        <h4 className="text-lg font-medium">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-4">
          <Button
            size="icon"
            variant={layout === "grid" ? "default" : "ghost"}
            asChild
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LuLayoutGrid />
            </Link>
          </Button>
          <Button
            size="icon"
            variant={layout === "list" ? "default" : "ghost"}
            asChild
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <LuList />
            </Link>
          </Button>
        </div>
      </div>
      <Separator className="mt-4" />
      <div>
        {layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </section>
  );
}
export default ProductsContainer;
