import Link from "next/link"
import Image from "next/image"
import ButtonImage from "../ButtonImage/ButtonImage"
import imgLogoTV from "@/assets/logotype-tv.png"
import imgSearch from "@/assets/svg/Search.svg"

import "./Header.css"
import "./Header-phone.css"

export default function Header() {
    return (
        <header>
            <Link href="/" className="header__title">
                <Image 
                    src={imgLogoTV}
                    alt="Ежиное Телевидение"
                    width={56}
                    height={56}
                />
                <h1>Ежиное Телевидение</h1>
            </Link>

            {/* todo: Сделать поиск */}
            {/* Поиск будет вести на отдельную страницу и текст поиска будет переносится туда */}
            {/* <div className="input-wrapper">
                <input type="text" placeholder="Поиск по серим" maxLength={100} />
                <ButtonImage
                    src={imgSearch}
                    alt="Поиск"
                    title="Поиск"
                    className="tp"
                />
            </div> */}
        </header>
    )
}


// import ButtonImage from "@/components/ButtonImage/ButtonImage"
// import imgLogo from "@/assets/logotype.png"

{/* <Link href="https://hedgehog-rp.ru/">
    <ButtonImage
        className="tp header__button"
        src={imgLogo}
        alt="home"
        text="Основной сайт"
        title="Открыть основной сайт"
        onClick={() => window.open("https://hedgehog-rp.ru/", "_self")}
    />
</Link> */}