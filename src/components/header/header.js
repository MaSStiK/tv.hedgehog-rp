'use client';
import Image from "next/image"
import { useRouter } from 'next/navigation';
import ButtonImage from "@/components/ButtonImage/ButtonImage"
import imgLogo from "@/assets/logo.png"
import imgHome from "@/assets/svg/Home.svg"

import "./header.css"

export default function Header() {
    const { push } = useRouter();

    return (
        <header>
            <div className="header__content">
                <button className="tp header__button" onClick={() => push("/")}>
                    <Image
                        src={imgLogo}
                        alt="logo"
                        draggable="false"
                        
                    />
                </button>

                <ButtonImage
                    className="tp"
                    src={imgHome}
                    alt="home"
                    text="Основной сайт"
                    onClick={() => window.open("https://hedgehog-rp.ru/", "_self")}
                />
            </div>
        </header>
    )
}