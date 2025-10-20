import './App.css'
import Main from "./components/Main.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {


    return (
        <div className={'container-fluid p-0'}>

            <Header/>
            <Main/>
            <Footer/>

        </div>
    );
};

export default App;
