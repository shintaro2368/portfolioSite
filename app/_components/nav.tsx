import NavLinks from "./nav-links";
import Logo from "./logo";
import Hamburger from "./hamburger";

// グローバルナビゲーション
export default function Nav() {
  return (
    <div className="flex justify-between items-center h-28">
      <Logo />
      <div className="hidden sm:flex justify-between w-fit">
        <NavLinks />
      </div>
      <div className="block sm:hidden">
        <Hamburger />
      </div>
    </div>
  );
}