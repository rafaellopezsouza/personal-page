import { useLanguage } from "../../context/LanguageContext";
import "./style.css";

export function Footer() {
    const { translations } = useLanguage();

    return (
        <footer className="rodape">
            <p className="rodape">
                &copy; {new Date().getFullYear()} {translations.footer.develop} Rafael Souza
            </p>
        </footer>
    )
}