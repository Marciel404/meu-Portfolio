import Link from "next/link";
import HEADER from "../components/header";
import Script from "next/script";
import { useEffect } from "react";

export default function index() {
  return (
    <main className="bg-slate-900 h-full">

      <Script>
        {
          useEffect(() => {
            for (
              const [dId, repo] of
              [
                ["sitemargo", "Marciel404/site-dmargo"],
                ["newFpyc", "Marciel404/NewFunctionsPYC"],
                ["botKamai", "Marciel404/discord-kamai-bot"],
                ["hexacolors", "Marciel404/hexacolors"],
                ["markuus", "Marciel404/MarkuusBot"],
                ["plmine", "Marciel404/teste-plugin-bau-de-morte"]
              ]) {
              const i = document.getElementById(dId)
              fetch("/api/getstar", { headers: { repo: `${repo}`, pId: i } })
                .then(x => x.json())
                .then(response => {
                  i.innerHTML = `${response.response}`
                })
            }

          })
        }
      </Script>

      <HEADER />

      <div className="flex justify-center items-center">

        <img className="rounded-full" src="images/eu.jpg" alt="Minha_Foto" />

        <div className="">

          <h1>Marcelo Neves</h1>

          <p>
            Eu sou o Marcelo Neves tenho 19 anos, sou um desenvolvedor back-end <br />
            aprendendo front-end, sei as tecnologias NextJs, TailWindCss <br />
            em direção a ser um cientista de dados, possuo grande conhecimentos em <br />
            banco de dados noSql (Mongodb) e banco de dados Sql (MySql)
          </p>

        </div>

      </div>

      <div className="">

        <h1 className="text-center">Alguns projetos</h1>

        <div className="text-center">

          <div className="flex justify-center">

            <div className="border-solid bg-slate-800 rounded-lg m-3" >

              <Link href="https://github.com/Marciel404/site-dmargo" className="no-underline">

                <div className="flex items-center justify-between m-3">

                  <h3 className="">Site D'Margo</h3>

                  <img src="/svgs/githubicon.svg" alt="git" />

                </div>

                <div className="text-start">

                  <p className="tresPontinhos">
                    Site da Loja D'Margo em desenvolvimento
                  </p>

                  <br />

                  <p className="tresPontinhos">
                    Site para estudar desenvolvimento web e ajudar a loja da minha tia, neste site <br />
                    estudei sobre front-end, back-end e banco de dados noSql com site
                  </p>

                </div>

                <div className="flex items-center justify-start m-3">

                  <i className="material-symbols-outlined h-7">star_half</i>

                  <h4>Estrelas</h4>

                  <p className="ml-2" id="sitemargo"></p>

                </div>

              </Link>

            </div>

            <div className="border-solid bg-slate-800 rounded-lg m-3" >

              <Link href="https://github.com/Marciel404/NewFunctionsPYC" className="no-underline">

                <div className="flex items-center justify-between m-3">

                  <h3 className="">NewFunctionsPYC</h3>

                  <img src="/svgs/githubicon.svg" alt="git" ></img>

                </div>

                <div className="text-start">

                  <p className="tresPontinhos">
                    Lib NewFunctionsPYC
                  </p>

                  <br />

                  <p className="tresPontinhos">
                    NewFunctionsPYC é uma livraria feita para adicionar novas <br />
                    funções a livraria de criação do discord chamada py-cord
                  </p>

                </div>

                <div className="flex items-center justify-start m-3">

                  <i className="material-symbols-outlined h-7">star_half</i>

                  <h4>Estrelas</h4>

                  <p className="ml-2" id="newFpyc"></p>

                </div>

              </Link>

            </div>

            <div className="border-solid bg-slate-800 rounded-lg m-3" >

              <Link href="https://github.com/Marciel404/discord-kamai-bot" className="no-underline">

                <div className="flex items-center justify-between m-3">

                  <h3 className="">Kamaitachi Bot</h3>

                  <img src="/svgs/githubicon.svg" alt="git" ></img>

                </div>

                <div className="text-start">

                  <p className="tresPontinhos">
                    Bot discord Kamaitachi
                  </p>

                  <br />

                  <p className="tresPontinhos">
                    Bot discord do servidor do Kamaitachi, gerenciava as atividades do <br />
                    servidor e moderava os membros com acesso a banco de dados e informações
                  </p>

                </div>

                <div className="flex items-center justify-start m-3">

                  <i className="material-symbols-outlined h-7">star_half</i>

                  <h4>Estrelas</h4>

                  <p className="ml-2" id="botKamai"></p>

                </div>

              </Link>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="border-solid bg-slate-800 rounded-lg m-3" >

              <Link href="https://github.com/Marciel404/hexacolors" className="no-underline">

                <div className="flex items-center justify-between m-3">

                  <h3 className="">Hexacolors</h3>

                  <img src="/svgs/githubicon.svg" alt="git" />

                </div>

                <div className="text-start">

                  <p className="tresPontinhos">
                    Lib Hexacolors
                  </p>

                  <br />

                  <p className="tresPontinhos">
                    Hexacolors é uma livraria que converte cores em hexadecimal (e outras) <br />
                    para cores entendíveis pelo python
                  </p>

                </div>

                <div className="flex items-center justify-start m-3">

                  <i className="material-symbols-outlined h-7">star_half</i>

                  <h4>Estrelas</h4>

                  <p className="ml-2" id="hexacolors"></p>

                </div>

              </Link>

            </div>

            <div className="border-solid bg-slate-800 rounded-lg m-3" >

              <Link href="https://github.com/Marciel404/MarkuusBot" className="no-underline">

                <div className="flex items-center justify-between m-3">

                  <h3 className="">Markuus</h3>

                  <img src="/svgs/githubicon.svg" alt="git" ></img>

                </div>

                <div className="text-start">

                  <p className="tresPontinhos">
                    Markuus bot discord
                  </p>

                  <br />

                  <p className="tresPontinhos">
                    Um bot de discord com foco em moderação e diversão contando <br />
                    com edição de foto e vídeo gerenciamento de banco de dados
                  </p>

                </div>

                <div className="flex items-center justify-start m-3">

                  <i className="material-symbols-outlined h-7">star_half</i>

                  <h4>Estrelas</h4>

                  <p className="ml-2" id="markuus"></p>

                </div>

              </Link>

            </div>

            <div className="border-solid bg-slate-800 rounded-lg m-3" >

              <Link href="https://github.com/Marciel404/teste-plugin-bau-de-morte" className="no-underline">

                <div className="flex items-center justify-between m-3">

                  <h3 className="">Plugin Minecraft</h3>

                  <img src="/svgs/githubicon.svg" alt="git" ></img>

                </div>

                <div className="text-start">

                  <p className="tresPontinhos">
                    Um simples puglin de Minecraft
                  </p>

                  <br />

                  <p className="tresPontinhos">
                    Este é um plugin de minecraft de mbau de morte de quando eu estava <br />
                    jogando minecraft com uns amigos
                  </p>

                </div>

                <div className="flex items-center justify-start m-3">

                  <i className="material-symbols-outlined h-7">star_half</i>

                  <h4>Estrelas</h4>

                  <p className="ml-2" id="plmine"></p>

                </div>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}
