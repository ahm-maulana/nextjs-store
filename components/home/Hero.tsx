import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nemo
          laborum inventore facere repellat alias dolore quidem similique?
          Dolorum porro alias non enim, commodi veritatis. Sapiente ab culpa vel
          adipisci!
        </p>
        <Button size="lg" className="mt-8" asChild>
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
