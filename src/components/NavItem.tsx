

interface Props{
    itemTitle:string;
}
const NavItem = ({itemTitle}:Props) => {
    return (
       <li className="gradient nav-item btn btn-danger   mx-1">{itemTitle}</li>
    );
};

export default NavItem;