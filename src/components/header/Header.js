'use client';
import Link from "next/link"
import { useRouter } from 'next/navigation';
import ButtonImage from "@/components/ButtonImage/ButtonImage"
import imgLogoTV from "@/assets/logotype-tv.png"
import imgLogo from "@/assets/logotype.png"

import "./Header.css"
import "./Header-phone.css"

export default function Header() {
    const { push } = useRouter();

    return (
        <header>
            <div className="header__content">
                <Link href="/">
                    <ButtonImage
                        className="tp header__button"
                        src={imgLogoTV}
                        alt="logo"
                        text="Ежиное Телевидение"
                        title="Открыть главную страницу"
                        onClick={() => push("/")}
                    />
                </Link>
            
                <Link href="https://hedgehog-rp.ru/">
                    <ButtonImage
                        className="tp header__button"
                        src={imgLogo}
                        alt="home"
                        text="Основной сайт"
                        title="Открыть основной сайт"
                        onClick={() => window.open("https://hedgehog-rp.ru/", "_self")}
                    />
                </Link>
            </div>
        </header>
    )
}