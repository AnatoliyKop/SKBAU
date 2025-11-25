import type {CardData, ProjectData} from "./typs.ts";

export const logo="/logo-wbg.png"
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
export const bauProjects: ProjectData[] = [
    {
        id: 1,
        title: "Ausbau des Dachgeschosses und Küchenmontage ",
        shortDescription:"Montage einer Küche und Ausbau des Dachgeschosses.",
        description: "Es war notwendig, eine Küchengarnitur zu montieren und die Aufteilung des Dachgeschosses in funktionale Wohnräume vorzunehmen." +
            " Dabei wurden Trennwände errichtet, Elektro- und Sanitärinstallationen angepasst sowie Boden- und Wandbeläge verlegt. Das Ergebnis ist ein komfortabler, moderner Wohnbereich mit optimaler Raumnutzung.",
        images: [
            { before: "/assets/befor1.jpg", after: "/assets/after1.jpg" },
            { before: "/assets/befor2.jpg", after: "/assets/after2.jpg" },
        ],
    },
    {
        id: 2,
        title: "Komplette Renovierung des Badezimmers.",
        shortDescription:"Vollständige Badsanierung",
        description: "Es war notwendig, eine vollständige Renovierung des Badezimmers durchzuführen. Alte Sanitäranlagen und Fliesen wurden entfernt, die Wasserleitungen erneuert und eine moderne, funktionale Raumaufteilung geschaffen. Neue Fliesen, Armaturen und Beleuchtung verleihen dem Badezimmer ein frisches, zeitloses Design mit hoher Alltagstauglichkeit.",
        houseImage:"/assets/haus2.jpg",

        images: [
            { before: "/assets/befor3.jpg", after: "/assets/after3.jpg" },
        ],
    },
    {
        id: 3,
        title: "Renovierung der Veranda und Terrassensanierung",
        shortDescription:"Komplette Erneuerung der Terrasse und Veranda",
        description: "Bei diesem Projekt wurde die bestehende Veranda vollständig renoviert und die Terrasse neu gestaltet. Alte Bodenbeläge wurden entfernt, die Fläche sorgfältig nivelliert und anschließend hochwertige Feinsteinzeugfliesen im modernen Stil verlegt. Zusätzlich erfolgte eine Abdichtung der Unterkonstruktion, um langfristigen Schutz vor Feuchtigkeit zu gewährleisten. Das Ergebnis ist eine elegante, wetterbeständige und pflegeleichte Außenfläche, die den Wohnkomfort deutlich erhöht.",
        houseImage:"/assets/haus3.jpg",
        images: [
            { before: "/assets/befor4.jpg", after: "/assets/after4.jpg" },
            { before: "/assets/befor5.jpg", after: "/assets/after5.jpg" },
        ],
    },
];