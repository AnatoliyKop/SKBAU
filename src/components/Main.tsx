import WillkommenCards from "./WillkommenCards.tsx";


const Main = () => {
    return (
        <main className="main-content text-center py-5">
            <h2 className="mb-3 gradient">Willkommen bei SKBAU Service24.1</h2>
            <img src="/logo-wbg.png" alt={"logo"}/>
            <p className="lead mb-5">
                Ihr Experte für hochwertige Renovierungen und Bauarbeiten in Deutschland.
            </p>
            <WillkommenCards />
        </main>)
};

export default Main;