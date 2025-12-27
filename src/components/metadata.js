import { Montserrat, Roboto_Mono } from "next/font/google"

const THEME_COLOR = "#14181B"
const SITE_TITLE = "Ежиное Телевидение"
const SITE_DESCRIPTION = "Ежиные Хроники — это приключенческий и фантастический веб-сериал о героях Ежиного РП, где сюжет начинается с создания ежиной армии и продолжается через сезоны, наполненные тематическими эпизодами и сюжетными поворотами."
const SITE_URL = "https://tv.hedgehog-rp.ru"

export const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["100","200","300","400","500","600","700","800","900"],
    style: ["normal","italic"],
    display: "swap"
})

export const _metadata = {
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_TITLE}`
    },
    description: SITE_DESCRIPTION,
    icons: {
        icon: [ // Основные .ico
            { url: "/favicon.ico", rel: "icon" }
        ],
        other: [ // PWA/Android maskable
            { url: "/favicon-192x192.png", rel: "mask-icon", color: THEME_COLOR }
        ]
    },
    manifest: "/site.webmanifest",
    metadataBase: new URL(SITE_URL),
    openGraph: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_TITLE,
        images: [{
            url: "/favicon-og-1200x630.png",
            width: 1200,
            height: 630
        }],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: ["/favicon-og-1200x630.png"],
        site: "@MaS2tiK",
        creator: "@MaS2tiK"
    },
    alternates: { // Канонический URL
        canonical: SITE_URL,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true
    },
    authors: [{ name: "MaSStiK", url: "https://hedgehog-rp.ru/about" }],
    keywords: [
        "Ежиные Хроники",
        "ErnestShow",
        "Ежиному РП",
        "приключенческий сериал",
        "фантастический сериал",
        "веб-сериал",
        "ежиная армия",
        "Даниил Вудергорский",
        "Эрнест Вудергорский",
        "эпизоды",
        "YouTube-сериал",
        "сага Ежиного государства"
    ]
}

export const _viewport = {
    themeColor: THEME_COLOR
}