import {navItems} from "../utils/constants.ts";
import NavItem from "./NavItem.tsx";
import {useState} from "react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (  <nav className="navbar navbar-expand-md">
            <button
                className="navbar-toggler btn btn-outline-light"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                <ul className="navbar-nav ms-auto mt-3 mt-md-0">
                    {navItems.map((item) => (
                        <NavItem itemTitle={item} key={item} />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;