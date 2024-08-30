"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"
import VideoList from "@/components/VideoList/VideoList";
import seasons from "@/components/seasons.js";

import "./watch.css";

export default function Watch() {
    const [Video, setVideo] = useState({})
    const params = useParams()

    useEffect(() => {
        let videoID = params.videoID // Получаем id из ссылки
        let videoSeason = videoID.split("e")[0] // Сезон видео
        let videoIndex = seasons[videoSeason].videos.findIndex(el => el.videoID === videoID)
        setVideo({
            id: videoID,
            src: seasons[videoSeason].videos[videoIndex].src,
            title: seasons[videoSeason].videos[videoIndex].title,
            season: videoSeason
        })
    }, [params]);

     return (<>
        <div className="player-wrapper">
            <iframe className="player" src={Video.src} allow="autoplay" allowFullScreen></iframe>
            <h3>{Video.title}</h3>
        </div>

        <hr/>

        {Video.season &&
            <section>
                <VideoList
                    title={`Другие серии ${Video.season.slice(1)} сезона`}
                    videos={seasons[Video.season].videos}
                    highlight={Video.id}
                />
            </section>
        }
    </>)
}
