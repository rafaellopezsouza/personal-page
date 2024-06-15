
export default function Contact(){
    return (
        <main>
            <div>
                <h1 className="nome">  Rafael Lopes de Souza</h1>
                <h2 className="subtitulo">Analista de Teste Automatizado Senior</h2>
                <ul className="contatos">
                    <li>Email: rls.rafaelsouza@gmail.com</li>
                    <li>LinkedIn: <a className="contatos_link" href="https://www.linkedin.com/in/rafael-souza-300449124" target="_blank">https://www.linkedin.com/in/rafael-souza-300449124</a>
                    </li>
                    <li>Github: <a className="contatos_link" href="https://github.com/rafaellopezsouza" target="_blank">https://github.com/rafaellopezsouza</a>
                    </li>
                </ul>
                <section className="sobre">
                    <h2>Escolaridade</h2>
                    <p>SUPERIOR COMPLETO – Análise e Desenvolvimento de Sistemas – Faculdade Anhanguera
                        Início no primeiro semestre de 2019 período noturno, previsão de conclusão segundo semestre
                        de 2021
                        PÓS-GRADUAÇÃO: Engenharia de Software com ênfase em Qualidade e Testes de Software -
                        Faculdade Vincit
                        Início DEZ-2022, previsão de conclusão DEZ-2023.<br /></p>
                </section>
                <section className="sobre">
                    <h2>Cursos e Certificados</h2>
                    <p>Certificado CTFL - Certified Tester Foundation Level - BSTQB.<br /></p>
                </section>
                <section className="conhecimento">
                    <h2>Conhecimentos</h2>
                    <ul>
                        <li>Automação E2E com Java/Python com Selenium.</li>
                        <li>Também já atuei com Javascript/Typescript com Cypress.</li>
                        <li>Conhecimentos sólidos em Queries SQL.</li>
                        <li>Automação de Backend (API) com python e Behave (Cucumber do Python). </li>
                        <li>Testes e automações com requisições REST, com Postman.</li>
                        <li>Escrita e desenvolvimento de cenários de testes usando Gherkin (BDD), com Cucumber/Behave. Testes de carga e Performance com JMeter.</li>
                    </ul>
                </section>
                <section className="experiencia">
                    <div><h2>Experiências</h2></div>
                    <h3>ANALISTA DE TESTES AUTOMATIZADOS: JAN/2023 até ATUAL</h3>
                    <p>Capgemini - Lisboa - Portugal. Trabalho para a Capgemini alocado no Instituto de Informática do Governo
                        de Portugal. Atuo no setor de Impedimentos temporários para o trabalho, fazendo automação de testes
                        com Java, e um Framework próprio da empresa com base no Selenium. Esse projeto já está em
                        andamento, pois com muitos testes não funcionando. E minha entrada foi para atualizar os testes já
                        existentes, e criar novos para as novas entregas. Trabalhamos com Kanban. Sempre desenvolvendo
                        testes com dados dinâmicos do banco de dados Oracle, com queries SQL. Escrita de cenários com o
                        Gherkin, criando features files.
                    </p>
                </section>
                <section className="experiencia">
                    <h3>ANALISTA DE TESTES AUTOMATIZADOS: JAN/2022 até JAN/2023</h3>
                    <p>Dialog Tecnologia da Informação - TI. Sou PJ para iniciar um projeto de automação na empresa. Produto
                        de comunicação interna de RH, com postagens entre os colaboradores, gerência, comunicados etc..
                        Comecei um projeto do zero de automação com Cypress/JavaScript, desde a implementação do projeto,
                        da arquitetura da automação, configuração dos repositórios, etc. Responsável por todo o processo de
                        desenvolvimento dos testes, desde a escrita dos cenários (Gherkin - BDD), documentação e automação
                        desses cenários. Caso encontre Bugs, é reportado no Monday. Essa automação foi iniciada em produtos
                        já finalizados, sendo implementado aos poucos dentro de cada sprint, os testes de produtos/features
                        novas. Treinamento de outros membros da equipe para implementação de novos cenários e testes no
                        projeto de automação. São cerca de 450 mil usuários do app/sistema.
                    </p>
                </section>
                <section className="experiencia">
                    <h3>ANALISTA DE TESTES AUTOMATIZADOS: MAR/2020 até JAN/2022  <br />
                        Assertiva Tecnologia da Informação - TI no ramo de dados para outras empresas de
                        crédito, financeiras, cobranças, prospecção B2B etc.
                    </h3>
                    <p>
                        Responsável pela squad sobre a qualidade do produto desenvolvido. Garantindo a cobertura
                        máxima de testes funcionais e não funcionais, manual e automatizado, escrevendo os casos de
                        testes seguindo o processo de BDD, testes de performance, automação de Backend utilizando
                        python e Behave e frontend utilizando o Ruby e Capybara/Cucumber e Python/Behave com
                        Selenium. Testes manuais de API Rest utilizando Postman, fazendo as requisições nos
                        endpoints (disponibilizados pelos devs via Swagger), documentação dos testes e relatando os
                        possíveis Bugs em ferramentas como o Trello e/ou Jira. Atualmente (a partir de DEZ/20) passei
                        a ser considerado um dos líderes de QAs, responsável pelo Code review de outros QAs,
                        aprovando ou apontando melhorias antes de fazer o merge para o projeto Master. Responsável
                        também por dar treinamentos para os novos QAs que ingressaram na empresa de menor
                        senioridade, e familiaridade com automação.
                    </p>
                </section>
                <section className="experiencia">
                    <h3>ANALISTA DE TESTES AUTOMATIZADOS: SET/2015 até FEV/2020 (Entre estágio e efetivo) <br />
                        Cflex Computação Flexível e Rail MP. Se trata da mesma empresa, porém com um novo CNPJ Empresa de desenvolvimento de software no segmento ferroviário. J
                    </h3>
                    <p>Realizar testes de funcionalidades do software desenvolvido pela empresa. Criar, escrever, e
                        executar casos de testes. Reportar Bugs encontrados no sistema Atlassian JIRA. Revisar e
                        opinar em Estórias de especificação técnicas (User Stories) escritas pelo Analista de Negócios.
                        Elaborar e executar casos de testes que podem gerar falhas/bugs no sistema. Elaboração de
                        documentação dos processos de testes e/ou softwares desenvolvidos pela empresa.
                    </p>
                </section>
            </div>

        </main>
    )
}