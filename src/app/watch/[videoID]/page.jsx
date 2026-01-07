import { notFound } from "next/navigation"
import Disclaimer from "@/components/Disclaimer/Disclaimer"
import Player from "@/components/Player/Player"
import PlayerSeason from "@/components/Player/PlayerSeason"
import { getEpisode, getAllEpisodeIds } from "@/lib/series"

export function generateStaticParams() {
    return getAllEpisodeIds().map((videoID) => ({ videoID }));
}

// Генерация метаданных для вставки названия эпизода в название страницы
export async function generateMetadata({ params }) {
    const { videoID } = params
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
    const { videoID } = params
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
