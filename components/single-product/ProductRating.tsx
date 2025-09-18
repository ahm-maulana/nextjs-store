import { FaStar } from "react-icons/fa";

function ProductRating({ productId }: { productId: string }) {
  const rating = 4.5;
  const count = 25;

  return (
    <span className="flex gap-1 items-center text-md mt-1 mb-4">
      <FaStar />
      {rating} ({count}) reviews
    </span>
  );
}
export default ProductRating;
