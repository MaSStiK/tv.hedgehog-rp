import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import isoToDate from "@/lib/utils/isoToDate"

import "./Episode.css"
import "./Episode-phone.css"

// Блок с эпизодом, превью и информация под ним
export default function Episode({ episode, highlightId="" }) {
    const episodeClass = clsx("episode", {
        episode_highlight: episode.videoID === highlightId
    })

    // Преобразуем ISO в объект с данными о дате
    const date = isoToDate(episode.publishedAt)

    // Ссылка на просмотр эпизода
    const episodeLink = `/watch/${episode.videoID}`

    // Если серия еще недоступна - отображаем coming_soon.png
    const thumbnailSrc = date.isReleased ? episode.thumbnail : "/thumbnails/coming_soon.png"
    
    return (
        <Link className={episodeClass} href={episodeLink}>
            <div className="episode__thumbnail">
                <Image
                    src={thumbnailSrc}
                    alt={episode.title}
                    width={320}
                    height={180}
                />
            </div>
            <div className="episode__info">
                <EpisodeInfo episode={episode} date={date} />
            </div>
        </Link>
    )
}

// Информация под превью
function EpisodeInfo({ episode, date }) {
    // Если эпизод вышел - отобразится вся информация
    if (date.isReleased) {
        return (
            <>
                <p>{episode.title}</p>
                <p className="text-gray">{episode.views}</p>
                <p className="text-gray">{date.dateWithMonth}</p>
            </>
        )
    }

    // Иначе только дата выхода
    return <p>Серия станет доступной {date.dateWithFullMonth} в {date.stringTime} по МСК</p>
}