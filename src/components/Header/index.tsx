import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageDropdown } from '../LanguageDropdown';
import './style.css';

export function Header() {
    const { translations } = useLanguage();

    return (
        <header className="header">
            <nav className="header-nav">
                <Link className="header-link" to={routes.home}>{translations.header.home}</Link>
                <Link className="header-link" to={routes.about}>{translations.header.aboutMe}</Link>
                <Link className="header-link" to={routes.resume}>{translations.header.resume}</Link>
            </nav>
            <LanguageDropdown />
        </header>
    );
}
