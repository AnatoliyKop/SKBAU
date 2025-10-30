
import {navLinks} from "../utils/constants.ts";
import {Link} from "react-router-dom";

interface Props{
    itemTitle:string;
}
const NavItem = ({itemTitle}:Props) => {
    return (

        <li className="nav-item mx-2 my-1">
            <Link
                to={navLinks[itemTitle] || "/"}
                className="btn btn-danger gradient w-100 text-decoration-none text-center"
            >
                {itemTitle}
            </Link>
        </li>
    );
};

export default NavItem;