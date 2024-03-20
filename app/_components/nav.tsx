import NavLinks from "./nav-links";
import Logo from "./logo";

export default function Nav() {
    return(
        <div className="py-8 flex justify-between">
            <Logo />
            <div className="flex justify-between w-1/3">
                <NavLinks/>
            </div>
        </div>
    );
}