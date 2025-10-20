import type {CardData} from "./typs.ts";

export const navItems = ["Leistungen", "Projekte", "Über uns", "Team", "Kontakt"]
export const cardData: CardData[] = [{
    title: "Über uns",
    description: "Wir sind ein Bauunternehmen mit über 10 Jahren Erfahrung.",
    link: "/about",
},{ title: "Projekte",
    description: "Sehen Sie unsere abgeschlossenen Projekte.",
    link: "/projects"},{title: "Leistungen",
    description: "Wir bieten alle Arten von Bau- und Renovierungsarbeiten.",
    link: "/services"},{title: "Kontakt",
    description: "Kontaktieren Sie uns für ein kostenloses Angebot.",
    link: "/contacts",}]