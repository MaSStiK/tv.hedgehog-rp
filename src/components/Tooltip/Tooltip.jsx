"use client"

import { useEffect, useRef } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Image from "next/image"
import tippy from "tippy.js"

import "tippy.js/dist/tippy.css"
import imgHelp from "@/assets/svg/Help.svg"

import "./Tooltip.css"

export default function Tooltip({ content }) {
    const buttonRef = useRef(null)

    useEffect(() => {
        if (!buttonRef.current) return

        // Если передана JSX-разметка - превращаем её в обычный HTML
        const tooltipContent = typeof content === "string"
            ? content
            : renderToStaticMarkup(content)

        const instance = tippy(buttonRef.current, {
            content: tooltipContent,
            allowHTML: true,
            arrow: true,
            trigger: "mouseenter focus click",
            interactive: true,
            appendTo: () => document.body,
        })

        return () => {
            instance.destroy()
        }
    }, [content])

    return (
        <button
            ref={buttonRef}
            className="tp tooltip"
            type="button"
            aria-label="Дополнительная информация"
        >
            <Image
                src={imgHelp}
                alt=""
                width={20}
                height={20}
            />
        </button>
    )
}