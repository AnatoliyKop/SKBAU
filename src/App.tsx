import './App.css'
import Main from "./components/Main.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";

function App() {

    const [page, setPage] = useState(navItems[0]);

    return (
        <div className={'container-fluid'}>

            <Header/>
            <Main/>
            <Footer/>

        </div>
    );
};

export default App;
