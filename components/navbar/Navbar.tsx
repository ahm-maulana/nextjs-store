import Container from "@/components/global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import { ModeToggle } from "./ModeToggle";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-wrap flex-col gap-4 sm:flex-row sm:justify-between sm:items-center py-8">
        <Logo />
        <div className="flex gap-4">
          <CartButton />
          <ModeToggle />
          <NavLinks />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
