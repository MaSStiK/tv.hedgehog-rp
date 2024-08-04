'use client';
import { useRouter } from 'next/navigation';
import ButtonImage from "@/components/ButtonImage/ButtonImage"
import imgLogoTV from "@/assets/logotype-tv.png"
import imgLogo from "@/assets/logotype.png"

import "./header.css"

export default function Header() {
    const { push } = useRouter();

    return (
        <header>
            <div className="header__content">
                <ButtonImage
                    className="tp header__button"
                    src={imgLogoTV}
                    alt="logo"
                    text="Ежиное Телевидение"
                    onClick={() => push("/")}
                />

                <ButtonImage
                    className="tp header__button"
                    src={imgLogo}
                    alt="home"
                    text="Основной сайт"
                    onClick={() => window.open("https://hedgehog-rp.ru/", "_self")}
                />
            </div>
        </header>
    )
}