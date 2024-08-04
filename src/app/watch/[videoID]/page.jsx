"use client";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { redirect, useParams } from "next/navigation"
import Link from 'next/link'
import Image from "next/image"
import VideoRow from "@/components/VideoRow/VideoRow";
import seasons from "@/components/seasons.js";

import "./watch.css";

export default function Watch() {
    const [VideoSrc, setVideoSrc] = useState()
    const [VideoTitle, setVideoTitle] = useState("")
    const [VideoSeason, setVideoSeason] = useState("")
    const params = useParams()

    useEffect(() => {
        let videoID = params.videoID // Получаем id из ссылки
        let videoSeason = videoID.split("e")[0] // Сезон видео
        let videoIndex = seasons[videoSeason].videos.findIndex(el => el.videoID === videoID)
        setVideoSrc(seasons[videoSeason].videos[videoIndex].src)
        setVideoTitle(seasons[videoSeason].videos[videoIndex].title)
        setVideoSeason(videoSeason)
    }, [params]);

     return (<>
        <div className="player-wrapper">
            <iframe className="player" src={VideoSrc} allow="autoplay" allowFullScreen></iframe>
            <h3>{VideoTitle}</h3>
        </div>

        <hr/>

        {VideoSeason &&
            <section>
                <VideoRow
                    title={`Другие серии ${VideoSeason.slice(1)} сезона`}
                    videos={seasons[VideoSeason].videos}
                />
            </section>
        }
    </>)
}
