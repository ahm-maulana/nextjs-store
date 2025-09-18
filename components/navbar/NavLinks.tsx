import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { LuAlignLeft } from "react-icons/lu";
import { links } from "@/utils/links";
import Link from "next/link";

function NavLinks() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <LuAlignLeft />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="start" sideOffset={10}>
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href} className="capitalize cursor-pointer">
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default NavLinks;
