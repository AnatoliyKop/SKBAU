import './App.css'
import Main from "./components/Main.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contakt.tsx";


function App() {


    return (
        <Router>
            <div className="container-fluid d-flex flex-column min-vh-100 p-0">
                <Header />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contacts" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
