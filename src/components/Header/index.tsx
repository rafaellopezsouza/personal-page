import { Link } from 'react-router-dom';
import { routes } from "../../routes"

import "./style.css";


export function Header() {
    return (
        <header className="cabecalho">
            <nav className="cabecalho_menu">
                <Link className="cabecalho_menu_home" to={routes.home}> Home</Link>
                <Link className="cabecalho_menu_home" to={routes.about}> Sobre mim</Link>
                <Link className="cabecalho_menu_home" to={routes.contact}> Curriculo</Link>
            </nav>
        </header>
    )
}