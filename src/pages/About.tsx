

export default function About() {
    return (
        <main className="apresentacao_titulo">
            <section className="apresentacao_conteudo">
                <h1 className="apresentacao_destaque">Sobre mim</h1>
                <p className="apresentacao_paragrafo">
                    Sou Rafael, Analista de Teste de Qualidade Sênior. Com mais de
                    <span id="years-experience" /> anos de experiência, sou
                    especializado em testes funcionais, automação e gerenciamento de
                    projetos. Comprometido com a excelência, acredito que a qualidade é a
                    base de qualquer projeto de sucesso.
                </p>
                <p className="apresentacao_paragrafo">
                    Minha trajetória profissional me permitiu trabalhar em uma variedade
                    de setores e projetos desafiadores. Essa diversidade me proporcionou
                    uma compreensão muito melhor do desenvolvimento de software e a
                    habilidade de me adaptar a diferentes cenários com facilidade.
                </p>
                <p className="apresentacao_paragrafo">
                    Além do meu trabalho, sou um entusiasta da tecnologia que está sempre
                    em busca de aprendizado contínuo e compartilhamento de conhecimento.
                    Acredito na colaboração como um catalisador para o sucesso, e estou
                    comprometido em contribuir para o crescimento da comunidade de teste
                    de qualidade.
                </p>
            </section>
            <div>
                <img className="imagem_com_borda" src="src/img/foto-rafael.jpg" alt="Minha Foto" />
            </div>
        </main>
    )
}