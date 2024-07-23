import { useLanguage } from "../context/LanguageContext";
import photo from "../assets/img/photo-profile.jpg";
import "./style.css";

export default function About() {
    const { translations } = useLanguage();

    return (
        <main className="presentation">
            <section className="presentation-content">
                <h1 className="presentation-title">{translations.aboutMe.title}</h1>
                {translations.aboutMe.description.map((item: string) => (
                    <p className="presentation-paragraph">
                        {item}
                    </p>
                ))}
            </section>
            <div>
                <img className="image-photo" src={photo} alt="Minha Foto" />
            </div>
        </main>
    )
}