export  interface CardData {
    title: string;
    description: string;
    link: string;
}
export interface ProjectData {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    houseImage?: string ;
    images:ChangesPhoto[];
}
export interface ChangesPhoto{
    before: string;
    after: string;
}
export interface InputFieldProps{
    label: string;
    type: string;
    name: string;
    placeholder: string;
    required?: boolean;
}
export interface TextAreaFieldProps {
    label: string;
    name: string;
    rows?: number;
    placeholder?: string;
    required?: boolean;
}