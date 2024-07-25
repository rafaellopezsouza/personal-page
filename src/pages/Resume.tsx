import { useLanguage } from "../context/LanguageContext";
import data from "../data/commun.json"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import "./style.css";
import { Card } from "../components/Card";
import { DownloadResume } from "../components/DownloadResume";

interface EducationProps {
    title: string;
    description: string[];
}

interface ExperienciesProps {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    duration: string | null;
    description: string;
}

export default function Resume() {
    const { translations } = useLanguage();

    return (
        <main>
            <div>
                <h1 className="name">Rafael Lopes de Souza</h1>
                <h2 className="resume-subtitle">{translations.resume.subtitle}</h2>
                <ul className="contacts">
                    <li><FaEnvelope className="icon" />
                        {data.email}
                    </li>
                    <li>
                        <FaLinkedin className="icon" />
                        <a className="contacts-link" href={data.linkedinLink} target="_blank">
                            {data.linkedinLink}
                        </a>
                    </li>
                    <li>
                        <FaGithub className="icon" />
                        <a className="contacts-link" href={data.githubLink} target="_blank">
                            {data.githubLink}
                        </a>
                    </li>
                    <li>
                        <DownloadResume />
                    </li>
                </ul>
                {translations.resume.education.map((item: EducationProps) => (
                    <section className="about-me">
                        <h2>{item.title}</h2>
                        {item.description.map((item: string) => (
                            <ul>
                                <li className="list">{item}</li>
                            </ul>
                        ))}
                    </section>
                ))}
                <section className="skills">
                    <h2>{translations.resume.skills.title}</h2>
                    <div className="skills-cards">
                        <Card title={translations.resume.skills.skills.languages.title} items={translations.resume.skills.skills.languages.items} />
                        <Card title={translations.resume.skills.skills.frameworks.title} items={translations.resume.skills.skills.frameworks.items} />
                        <Card title={translations.resume.skills.skills.tools.title} items={translations.resume.skills.skills.tools.items} />
                        <Card title={translations.resume.skills.skills.agile.title} items={translations.resume.skills.skills.agile.items} />
                    </div>
                </section>
                <section className="experience">
                    <h2>{translations.resume.experiencies.title}</h2>
                    <ul>
                        {translations.resume.experiencies.items.map((item: ExperienciesProps, index: number) => (
                            <li className="list" key={index}>
                                <h3>{item.title}</h3>
                                <span className="startEndDuration">De {item.startDate} até {item.endDate}</span>
                                {item.duration ? <span className="duration">( {item.duration} )</span> : ""}
                                <h5>{item.company}</h5>
                                <p>{item.description}</p>
                                <br />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    )
}