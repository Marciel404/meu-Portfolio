import HEADER from "../components/header";
import SIDEBAR from "../components/sidebar";

export default function about() {
    return (
        <main className="bg-slate-900 h-full">

            <HEADER />
            <SIDEBAR />

            <div className="text-white border-solid border-white rounded-lg mb-5 p-3 text-center">

                <div className="flex items-center justify-center">

                    <img src="/svgs/person.svg" alt="maleta_icon" />
                    <h1>Quem sou?</h1>

                </div>

                <h3>Me chamo Marcelo Neves De Oliveira, tenho {parseInt(new Date().getUTCFullYear()) - 2004} anos,</h3>
                <h3>gosto de programação desde que eu tinha 10 anos de idade,</h3>
                <h3>nasci em Maricá no Rio de Janeiro, vivi boa parte da minha vida</h3>
                <h3>em Niterói/Rj, sou um entusiasta da tecnologia, estudo programação desde</h3>
                <h3>os 15/16 anos de idade quando montei meu pc depois de consegui um estagio em uma</h3>
                <h3>casa de material de contrução e bazar chamada Casa Leader situada em Itaipu no Rio de Janeiro</h3>
                <h3>(E eu não sei pq eu fiz isso aqui em formato de piramide, eu juro que não sou iluminati pelo amor de Deus)</h3>

            </div>

            <div className="text-white border-solid border-white rounded-lg mb-5 p-3">

                <div className="flex items-center justify-center">

                    <img src="/svgs/person.svg" alt="maleta_icon" />
                    <h1>Perfil profissional</h1>

                </div>

                <div className="text-center m-3">

                    <h3>Responsavel, assíduo, capacidade de trabalhar em equipe,</h3>
                    <h3>disposto a aprender coisas novas</h3>
                    <br />
                    <h3>Busco novos desafios e uma colocação no mercado de</h3>
                    <h3>trabalho, de forma a desenvolver minhas habilidades e</h3>
                    <h3>colaborar com meus conhecimentos e experiencias</h3>

                </div>

            </div>

            <div className="text-white border-solid border-white rounded-lg mb-5 p-3">

                <div className="flex items-center justify-center">

                    <img src="/svgs/maleta.svg" alt="maleta icon" />
                    <h1 className="text-center">Experiencia profissional</h1>

                </div>

                <div className="text-center m-3">

                    <h3>Estagiario na Casa Leader Material de contrução, Itaipu</h3>
                    <h4>Julho 2020 ---- Abril 2021</h4>

                </div>

                <div className="text-center m-3">

                    <h3>Estagiario na Caixa Econômica Federal</h3>
                    <h4>Julho 2023 ---- Novembro 2023</h4>

                </div>

            </div>

            <div className="text-white border-solid border-white rounded-lg mb-5 p-3">

                <div className="flex items-center justify-center">

                    <img src="/svgs/chapel.svg" alt="chapel icon" />
                    <h1>Formação</h1>

                </div>

                <div className="text-center">

                    <h3>Ensino Medio (Completo)</h3>

                </div>

            </div>

            <div className="text-white border-solid border-white rounded-lg mb-5 p-3">

                <div className="flex items-center justify-center">

                    <img src="/svgs/estrela.svg" alt="star icon"></img>
                    <h1>Cursos</h1>

                </div>

                <div className="text-center">

                    <h3>Adobe Premiere - (Curso Profissionalizante Microcamp) Concluido</h3>
                    <h3>Adobe Photoshop - (Curso Profissionalizante Microcamp) Concluido</h3>
                    <h3>Adobe Illustrator - (Curso Profissionalizante Microcamp) Concluido</h3>
                    <h3>Pacote Office 2018 - (Curso Profissionalizante Microcamp) Concluido</h3>

                </div>

            </div>

            <div className="text-white border-solid border-white rounded-lg p-3">

                <div className="flex items-center justify-center">

                    <img src="/svgs/chapel.svg" alt="chapel icon" />
                    <h1>Conhecimentos</h1>

                </div>

                <div>

                    <div className="flex justify-center">

                        <div>
                            <li>Python Avançado (Autodidata)</li>
                            <li>Javascript Intermediario (Autodidata)</li>
                            <li>Typescript Intermediario (Autodidata)</li>
                            <li>Java Básico (Autodidata)</li>
                            <li>Kotlin Básico (Autodidata)</li>
                        </div>

                        <div>

                            <li>NextJs</li>
                            <li>Logica de programação</li>
                            <li>Banco de dados noSql (Mongodb)</li>
                            <li>Banco de dados Sql (MySql)</li>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    )
}