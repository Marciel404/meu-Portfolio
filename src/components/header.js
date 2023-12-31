import Link from "next/link";
import clickMenu from "../scripts/clickMenu";

export default function HEADER() {
    return (
        <div className="">

            <header className="headerPc text-white flex justify-between items-center top-0 z-50 w-full">
                <div className="ml-5">
                    <Link href="/" className="m-3 no-underline text-white">
                        <h1 className="">
                            Marcelo Neves
                        </h1>
                    </Link>
                </div>

                <div className="flex">

                    <Link href="/" className="no-underline text-white">
                        <div className="m-3 flex items-center hover:cursor-pointer ">
                            <img className="hover:cursor-pointer" src="/svgs/home.svg" alt="home_icon" />
                            <h3>Menu</h3>
                        </div>
                    </Link>

                    <Link href="/about" className="no-underline text-white">
                        <div className="flex items-center hover:cursor-pointer m-3">
                            <img className="hover:cursor-pointer" src="/svgs/person.svg" alt="maleta_icon" />
                            <h3>Sobre Mim</h3>
                        </div>
                    </Link>

                </div>

                <div className="items-center">

                    <Link href="https://github.com/Marciel404" target="_blank" className="m-3 no-underline text-white">
                        <img className=" hover:cursor-pointer" src="/svgs/githubicon.svg" alt="github icon" />
                    </Link>

                    <Link href="https://discord.com/users/485801281621852175" target="_blank" className="m-3 no-underline text-white">
                        <img className=" hover:cursor-pointer" src="/svgs/discordicon.svg" alt="discord icon" />
                    </Link>

                    <Link href="https://www.instagram.com/m4rcelo.oliveira/" target="_blank" className="m-3 no-underline text-white">
                        <img className=" hover:cursor-pointer" src="/svgs/instagram.svg" alt="instagram_icon" />
                    </Link>

                </div>
            </header>

            <footer className="headerMobile bottom-0 left-0 fixed w-full hidden">

                <div className="flex justify-between items-center">

                    <div>
                        <i className="material-symbols-outlined hover:cursor-pointer p-3 text-4xl" onClick={clickMenu}>menu</i>
                    </div>

                    <h1 className="m-3">Marcelo Neves</h1>

                </div>

            </footer>

        </div>
    )
}