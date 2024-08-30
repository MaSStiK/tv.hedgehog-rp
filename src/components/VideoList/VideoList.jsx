import Link from "next/link"
import Image from "next/image"

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
                        <p>{video.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}