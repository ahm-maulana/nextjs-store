import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import Breadcrumbs from "@/components/single-product/Breadcrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import { fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await fetchSingleProduct(id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <Breadcrumbs name={name} />
      <div className="mt-6 grid lg:grid-cols-12 gap-12">
        <div className="w-full lg:col-span-5">
          <div className="relative h-[350px] lg:h-full lg:max-h-[600px]">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              priority
              className="max-w-full rounded-md object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="flex items-center gap-x-8">
            <h1 className="font-bold capitalize text-3xl">{name}</h1>
            <FavoriteToggleButton productId={id} />
          </div>
          <ProductRating productId={id} />
          <h4 className="mt-2 text-xl">{company}</h4>
          <p className="mt-3 p-2 bg-muted rounded-md inline-block">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
}
export default SingleProductPage;
