
export default function Home() {
    return (
        <main className="apresentacao_titulo">
            <section className="apresentacao_conteudo">
                <h1 className="apresentacao_destaque">
                    Bem vindo a minha página de currículo web,
                    <strong className="titulo_destaque">Sou Analista de Teste Automatizado.</strong>
                </h1>
                <p className="apresentacao_paragrafo">
                    Olá, sou Rafael, e é um prazer recebê-lo no meu currículo web.
                    Sinta-se à vontade para explorar minhas habilidades e experiências. Se
                    você tiver alguma pergunta ou precisar de mais informações, estou à
                    disposição para ajudar. Vamos começar!
                </p>
                <div className="apresentacao_botoes">
                    <h2 className="subtitulo">Acesse minhas redes</h2>
                    <a className="apresentacao_botao_input" href="https://www.linkedin.com/in/rafael-souza-300449124" target="_blank">Linkedin <img src="src/img/linkedin.png" alt="icone LinkedIn" />
                    </a>
                    <a className="apresentacao_botao_input" href="https://github.com/rafaellopezsouza" target="_blank">
                        Github <img src="src/img/github.png" alt="icone Github" />
                    </a>
                </div>
            </section>
            <div>
                <img className="imagem_com_borda" src="src/img/foto-rafael.jpg" alt="Minha Foto" />
            </div>
        </main>
    )
}