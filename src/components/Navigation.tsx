import {navItems} from "../utils/constants.ts";
import NavItem from "./NavItem.tsx";

const Navigation = () => {

    return (
        <nav className="fixed-top mt-3 me-5">
            <ul className="nav justify-content-end">
                {navItems.map(item => <NavItem itemTitle={item} key={item}/>) }
            </ul>
        </nav>
    );
};

export default Navigation;