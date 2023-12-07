import HEADER from "../components/header";

export default function about() {
    return (
        <main className="bg-slate-900 h-screen">
            <HEADER />

            <div className="text-white border-solid border-white rounded-lg mb-5 p-3 text-center">
                <h1>Quem sou?</h1>
                <h3>Me chamo Marcelo Neves De Oliveira, tenho 19 anos,</h3>
                <h3>gosto de programação desde que eu tinha 10 anos de idade,</h3>
                <h3>nasci em Maricá no Rio de Janeiro, vivi boa parte da minha vida</h3>
                <h3>em Niterói/Rj, sou um entusiasta da tecnologia, estudo programação desde</h3>
                <h3>os 15/16 anos de idade quando montei meu pc depois de consegui um estagio em uma</h3>
                <h3>casa de material de contrução e bazar chamada Casa Leader situada em Itaipu no Rio de Janeiro</h3>
                <h3>(E eu não sei pq eu fiz isso aqui em formato de piramide, eu juro que não sou iluminati pelo amor de Deus)</h3>
            </div>

            <div className="text-white border-solid border-white rounded-lg mb-5 p-3">
                <li className="text-center text-3xl font-mono font-bold">Meus conhecimentos</li>
                <div className="flex justify-center">
                    <div className="">
                        <li>NextJs</li>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                        <li>Javascript/Typescript (Avançado)</li>
                        <li>Python (Avançado)</li>
                        <li>Java/Kotlin (Basico)</li>
                        <li>Mongodb</li>
                        <li>Banco de dados (Sql e NoSql)</li>
                    </div>
                </div>
            </div>
        </main>
    )
}