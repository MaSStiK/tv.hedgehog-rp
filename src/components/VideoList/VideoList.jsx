import Link from "next/link"
import Image from "next/image"
import ToDate from "@/components/timestampToDate"

import "./VideoList.css"
import "./VideoList-phone.css"

export default function VideoList({
    title,
    videos,
    highlight
}) {
    return (
        <div className="video-content">
            <h1>{title}</h1>
            <div className="video-row">
                    {videos.map((video, i) => (
                    <Link className={`video ${video.videoID === highlight ? "video_highlight" : ""}`} key={i} href={`/watch/${video.videoID}`}>
                        <div className="video__thumbnail">
                            <Image
                                src={video.thumbnail}
                                alt="thumbnail"
                            />
                        </div>
                        <div className="video__info">
                            {ToDate(video.publishedAt).passNow
                                ? <>
                                    <p>{video.title}</p>
                                    <p className="text-gray">{video.views}</p>
                                    <p className="text-gray">{ToDate(video.publishedAt).dateWithMonth}</p>
                                  </>
                                : <p>Серия станет доступной {ToDate(video.publishedAt).dateWithMonth} в {ToDate(video.publishedAt).stringTime} по МСК</p>
                            }
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}