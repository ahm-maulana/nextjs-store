import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

function CartButton() {
  // temp
  const numItemsInCart = 9;
  return (
    <Button size="icon" variant="outline" className="relative" asChild>
      <Link href="/cart">
        <LuShoppingCart className="w-6 h-6" />
        <span className="absolute -top-3 -right-3 flex items-center justify-center bg-primary text-white rounded-full w-6 h-6 text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
