import clickMenu from "../scripts/clickMenu";
import Link from "next/link";

export default function SIDEBAR() {
    return (
        <div className="sidebarmobile hidden animate-fadeinleft">

            <div className="flex">

                <div className="border-solid overflow-y-auto top-0 left-0 fixed h-screen bg-slate-900 w-3/4 z-10">

                    <div>

                        <div className="overflow-hidden grid grid-cols-2 items-center">

                            <h2>
                                Marcelo Neves
                            </h2>
                            <div className="flex justify-end">
                                <i className="material-symbols-outlined text-5xl h-auto hover:cursor-pointer" onClick={clickMenu}>
                                    Close
                                </i>
                            </div>

                        </div>

                        <div>

                            <div className="text-center justify-center border-double flex items-center m-3 p-3">

                                <div>
                                    <img width="25px" height="25px" src="/svgs/home.svg" alt="home_icon" />
                                </div>

                                <div>
                                    <Link className="list-none text-white text-lg no-underline" href="/">Inicio</Link>
                                </div>

                            </div>

                            <div className="text-center justify-center border-double flex items-center m-3 p-3">

                                <div>
                                    <img width="25px" height="25px" src="/svgs/githubicon.svg" alt="github_icon" />
                                </div>

                                <div>
                                    <Link className="list-none text-white text-lg no-underline" href="/https://github.com/Marciel404">GitHub</Link>
                                </div>

                            </div>

                            <div className="text-center justify-center border-double flex items-center m-3 p-3">

                                <div>
                                    <img width="25px" height="25px" src="/svgs/person.svg" alt="person_icon" />
                                </div>

                                <div>
                                    <Link className="list-none text-white text-lg no-underline" href="/about">Sobre Mim</Link>
                                </div>

                            </div>

                            <div className="text-center justify-center border-double flex items-center m-3 p-3">

                                <div>
                                    <img width="25px" height="25px" src="/svgs/discordicon.svg" alt="discord_icon" />
                                </div>

                                <div>
                                    <Link className="list-none text-white text-lg no-underline" href="https://discord.com/users/485801281621852175">
                                        Meu perfil no discord
                                    </Link>
                                </div>

                            </div>

                            <div className="text-center justify-center border-double flex items-center m-3 p-3">

                                <div>
                                    <img width="25px" height="25px" src="/svgs/instagram.svg" alt="instagram_icon" />
                                </div>

                                <div>
                                    <Link className="list-none text-white text-lg no-underline" href="https://www.instagram.com/m4rcelo.oliveira/">
                                        Instagram
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="sidebarmobile top-0 h-screen fixed w-full" onClick={clickMenu}></div>

            </div>

        </div>

    )
}