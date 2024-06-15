import "./style.css";

export function Footer() {
    return (
        <footer className="rodape">
            <p className="rodape">
                &copy; {new Date().getFullYear()} Desenvolvido por Rafael Lopes de Souza
            </p>
        </footer>
    )
}