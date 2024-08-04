"use client";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { redirect, useParams } from "next/navigation"
import seasons from "@/components/videos/seasons";

import style from "./watch.module.css";

export default function Watch() {
    const [VideoSrc, setVideoSrc] = useState()
    const params = useParams()

    useEffect(() => {
        let videoID = params.videoID // Получаем id из ссылки
        let videoSeason = videoID.split("e")[0] // Сезон видео
        let videoIndex = seasons[videoSeason].videos.findIndex(el => el.videoID === videoID)
        setVideoSrc(seasons[videoSeason].videos[videoIndex].src)
    }, [params]);

     return (
        <article>
            <div className={style.playerWrapper}>
                <iframe className={style.player} src={VideoSrc}></iframe>
            </div>
        </article>
    )
}
