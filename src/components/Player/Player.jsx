"use client"
import { useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { getEpisode } from "@/lib/series"
import isoToDate from "@/lib/utils/isoToDate"

import "./Player.css"

export default function Player({ videoID }) {
    const [iframeLoaded, setIframeLoaded] = useState(false)
    const episode = getEpisode(videoID) // Получаем сам эпизод

    // Преобразуем ISO в объект с данными о дате
    const date = isoToDate(episode.publishedAt)

    // Если серия еще недоступна - отображаем coming_soon.png
    const thumbnailSrc = date.isReleased ? episode.thumbnail : "/thumbnails/coming_soon.png"
    const videoSrc = date.isReleased ? episode.src : ""

    // Если есть ссылка на видео и когда видео загрузится тогда скрываем превью
    const episodeClass = clsx("player-frame", {
        loaded: videoSrc && iframeLoaded
    })

    return (
        <div className="player">
            <div className={episodeClass}>
                <div className="player-frame__thumbnail">
                    <Image src={thumbnailSrc}
                        alt={episode.title}
                        width={640}
                        height={360}
                    />
                </div>
                <iframe
                    className="player-frame__iframe"
                    key={videoSrc}
                    src={videoSrc}
                    allow="autoplay"
                    allowFullScreen
                    onLoad={() => setIframeLoaded(true)}
                />
            </div>
            <div className="player__info">
                <PlayerInfo episode={episode} date={date} />
            </div>
        </div>
    )
}

// Информация под плеером
function PlayerInfo({ episode, date }) {
    // Если эпизод вышел - отобразится вся информация
    if (date.isReleased) {
        return (
            <>
                <h3>{episode.title}</h3>
                <p className="text-gray">{episode.views}</p>
                <p className="text-gray">{date.dateWithMonth}</p>
            </>
        )
    }

    // Иначе только дата выхода
    return <h3>Серия станет доступной {date.dateWithFullMonth} в {date.stringTime} по МСК</h3>
}