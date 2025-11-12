import InputField from "./InputField.tsx";
import TextAreaField from "./TextAreaField.tsx";
import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser"


const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        const formData = new FormData(form.current);
        for (const [key, value] of formData.entries()) {
            if (!value) {
                setErrorMessage(`Bitte füllen Sie das Feld ${key} aus`);
                setStatus("error");
                return;
            }
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            form.current.reset();
        } catch (error) {
            const message =
                error && typeof error === "object" && "text" in error
                    ? (error as { text: string }).text
                    : "Unbekannter Fehler";
            console.error("Email send error:", message);
            setErrorMessage("Fehler beim Senden. Bitte versuchen Sie es erneut.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="p-5 rounded-4 bg-success text-light text-center shadow">
                <h3>Nachricht erfolgreich gesendet!</h3>
                <p>Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                <p>Ihr Anliegen ist uns wichtig und wir freuen uns darauf, Ihnen zu helfen.</p>
            </div>
        );
    }

    return (
        <form ref={form} onSubmit={sendEmail} className="p-4 rounded-4 bg-dark bg-opacity-50 text-light shadow">
            <InputField label="Ihr Name" type="text" name="user_name" placeholder="Piter Müller" required />
            <InputField label="E-Mail" type="email" name="user_email" placeholder="email@example.com" required />
            <InputField label="Telefonnummer" type="tel" name="user_number" placeholder="+49 123 4567890" required />
            <TextAreaField label="Ihre Nachricht" name="user_message" placeholder="Ihre Nachricht..." required />

            <button type="submit" className="btn btn-danger w-100" disabled={status === "loading"}>
                {status === "loading" ? "Senden..." : "Senden"}
            </button>

            {status === "error" && <p className="mt-3 text-danger">{errorMessage}</p>}
        </form>
    );
};
export default ContactForm;