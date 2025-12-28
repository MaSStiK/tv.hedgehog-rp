"use client"
import Image from "next/image"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import imgHelp from "@/assets/svg/Help.svg"

import "./Tooltip.css"

export default function Tooltip({ content }) {
    return (
        <Tippy content={content} arrow={true} trigger="mouseenter focus click" interactive>
            <button className="tp tooltip">
                <Image
                    src={imgHelp}
                    alt="Дополнительная информация"
                    width={20}
                    height={20}
                />
            </button>
        </Tippy>
    )
}
