import Navigation from "./Navigation.tsx";

const Header = () => {
    return (
        <header className="rounded-5">
            <Navigation/>
            <h1 className=" gradient ms-5  ">
                <span className="fw-bold display-4">SKBAU</span> SERVICE 24
            </h1></header>

    );
};

export default Header;