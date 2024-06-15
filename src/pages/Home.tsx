import { useLanguage } from '../context/LanguageContext';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import commun from "../data/commun.json"
import photo from "../img/photo-profile.jpg";
import "./style.css";

export default function Home() {
    const { translations } = useLanguage();
    return (
        <main className="presentation">
            <section className="presentation-content">
                <h1 className="presentation-title">
                    {translations.home.title}
                    <strong className="presentation-emphasis"> {translations.home.subtitle}</strong>
                </h1>
                <p className="presentation-paragraph">
                    {translations.home.paragraph}
                </p>
                <div className="home-buttons">
                    <h2 className="home-subtitle">{translations.home.accessNetworks}</h2>
                    <a className="home-button" href={commun.linkedinLink} target="_blank">
                        Linkedin <FaLinkedinIn className="icon-button" />
                    </a>
                    <a className="home-button" href={commun.githubLink} target="_blank">
                        Github <FaGithub className="icon-button" />
                    </a>
                </div>
            </section>
            <div>
                <img className="image-photo" src={photo} alt="Minha Foto" />
            </div>
        </main>
    );
}
