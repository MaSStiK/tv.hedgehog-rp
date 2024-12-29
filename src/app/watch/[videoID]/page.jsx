"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"
import VideoList from "@/components/VideoList/VideoList";
import seasons from "@/components/seasons.js";
import ToDate from "@/components/timestampToDate"

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
            timestamp: seasons[videoSeason].videos[videoIndex].timestamp,
            views: seasons[videoSeason].videos[videoIndex].views,
            season: videoSeason
        })
    }, [params]);

     return (<>
        <div className="player-wrapper">
            <iframe className="player" src={ToDate(Video.timestamp).passNow ? Video.src : ""} allow="autoplay" allowFullScreen></iframe>
            {Object.keys(Video).length !== 0 &&
                <div className="player__info">
                    {ToDate(Video.timestamp).passNow
                        ? <>
                            <h3>{Video.title}</h3>
                            <p className="text-gray">{Video.views}</p>
                            <p className="text-gray">{ToDate(Video.timestamp).dateWithMonth}</p>
                          </>
                        : <h3>Серия станет доступной {ToDate(Video.timestamp).dateWithMonth} в {ToDate(Video.timestamp).stringTime} по МСК</h3>
                    }
                </div>
            }
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
