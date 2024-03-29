import NavLinks from "./nav-links";
import Logo from "./logo";

export default function Nav() {
  return (
    <div className="flex justify-between items-center h-28">
      <Logo />
      <div className="flex justify-between w-fit">
        <NavLinks />
      </div>
    </div>
  );
}