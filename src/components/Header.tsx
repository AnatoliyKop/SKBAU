import Navigation from "./Navigation.tsx";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="rounded-5 shadow-sm">
            <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap">
                <Link to="/" className="text-decoration-none">
                    <h1 className="gradient mb-0">
                        <span className="fw-bold display-5">SKBAU</span> SERVICE 24
                    </h1>
                </Link>
                <Navigation />
            </div>
        </header>

    );
};

export default Header;