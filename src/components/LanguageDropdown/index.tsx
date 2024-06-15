import { useState } from 'react';
import { useLanguage, LanguageOptions } from '../../context/LanguageContext';
import "./style.css";

export function LanguageDropdown() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const handleChangeLanguage = (newLanguage: LanguageOptions) => {
        setLanguage(newLanguage);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="language-dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {language === 'pt' && <img src="https://img.icons8.com/fluency/48/brazil-circular.png" alt="Português" />}
                {language === 'en' && <img src="https://img.icons8.com/fluency/48/great-britain-circular.png" alt="English" />}
                {language === 'it' && <img src="https://img.icons8.com/fluency/48/italy-circular.png" alt="Italiano" />}
                {language === 'es' && <img src="https://img.icons8.com/fluency/48/spain-circular.png" alt="Spañol" />}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li onClick={() => handleChangeLanguage('pt')}>
                        <img src="https://img.icons8.com/fluency/48/brazil-circular.png" alt="Português" />
                        <span>Português</span>
                    </li>
                    <li onClick={() => handleChangeLanguage('en')}>
                        <img src="https://img.icons8.com/fluency/48/great-britain-circular.png" alt="English" />
                        <span>English</span>
                    </li>
                    <li onClick={() => handleChangeLanguage('it')}>
                        <img src="https://img.icons8.com/fluency/48/italy-circular.png" alt="Italiano" />
                        <span>Italiano</span>
                    </li>
                    <li onClick={() => handleChangeLanguage('es')}>
                        <img src="https://img.icons8.com/fluency/48/spain-circular.png" alt="Spañol" />
                        <span>Spañol</span>
                    </li>
                </ul>
            )}
        </div>
    );
}
