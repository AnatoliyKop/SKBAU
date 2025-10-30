import type {CardData} from "./typs.ts";

export const navItems = ["Leistungen", "Projekte", "Über uns", "Kontakt"]
export const navLinks: Record<string, string> = {
    "Über uns": "/about",
    "Projekte": "/projects",
    "Leistungen": "/services",
    "Kontakt": "/contacts"
}
export const cardData: CardData[] = [
    {
        title: "Über uns",
        description: "Erfahren Sie mehr über unsere Mission, unser Team und unsere Werte.",
        link: "/about",
    },
    {
        title: "Projekte",
        description: "Sehen Sie unsere abgeschlossenen Bauprojekte und Vorher/Nachher-Ergebnisse.",
        link: "/projects",
    },
    {
        title: "Leistungen",
        description: "Entdecken Sie unser umfassendes Leistungsspektrum für Innenarbeiten.",
        link: "/services",
    },
    {
        title: "Kontakt",
        description: "Kontaktieren Sie uns für Beratung oder ein unverbindliches Angebot.",
        link: "/contacts",
    },
];

export const servicesList = [
    "Vorbereitung: Abriss, Reinigung, Ausgleich",
    "Wand- & Deckengestaltung: Putz, Spachtel, Farbe, Tapeten",
    "Trockenbau: Trennwände, Decken, Nischen",
    "Elektrik: Verkabelung, Steckdosen, Beleuchtung",
    "Sanitärarbeiten: Rohre, Armaturen, Badezimmer",
    "Bodenbeläge: Fliesen, Laminat, Fußbodenheizung",
    "Montage: Türen, Fenster, Sockelleisten, Dekorelemente",
    "Zusätzliche Leistungen: Lüftung, Schalldämmung, Einbaumöbel",
];