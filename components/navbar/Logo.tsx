import Link from "next/link";
import { Button } from "../ui/button";
import { VscCode } from "react-icons/vsc";

function Logo() {
  return (
    <Button size="lg" asChild>
      <Link href="/">
        <VscCode className="size-10" />
      </Link>
    </Button>
  );
}
export default Logo;
