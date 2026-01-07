import { use } from "react"
import { notFound } from "next/navigation"
import Disclaimer from "@/components/Disclaimer/Disclaimer"
import Player from "@/components/Player/Player"
import PlayerSeason from "@/components/Player/PlayerSeason"
import { getEpisode } from "@/lib/series"

// Генерация метаданных для вставки названия эпизода в название страницы
export async function generateMetadata({ params }) {
    const { videoID } = await params
    const episode = getEpisode(videoID)

    // Если эпизод не найден
    if (!episode) return { title: "Эпизод не найден" }

    return {
        title: episode.title,
        description: `Смотреть серию "${episode.title}"`
    }
}

// Страница с просмотром эпизода
export default function Watch({ params }) {
    const { videoID } = use(params)
    const episode = getEpisode(videoID)

    // Если эпизод не найден
    if (!episode || Object.keys(episode).length === 0) notFound()

    return (
        <main>
            <Disclaimer />
            <Player videoID={videoID} />
            <hr/>
            {episode.seasonKey && <PlayerSeason episode={episode} />}
        </main>
    )
}
