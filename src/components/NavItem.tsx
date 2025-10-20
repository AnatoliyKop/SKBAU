

interface Props{
    itemTitle:string;
}
const NavItem = ({itemTitle}:Props) => {
    return (
        <li className="nav-item mx-2 my-1">
            <button className="btn btn-danger gradient w-100">{itemTitle}</button>
        </li>
    );
};

export default NavItem;