import Link from "next/link"
import Image from "next/image"

import "./VideoRow.css"
import "./VideoRow-phone.css"

export default function VideoRow({
    title,
    videos
}) {
    return (
        <div className="video-content">
            <h1>{title}</h1>
            <div className="video-row">
                    {videos.map((video, i) => (
                    <Link className="video" key={i} href={`/watch/${video.videoID}`}>
                        <div className="video__thumbnail">
                            <Image
                                src={video.thumbnail}
                                alt="thumbnail"
                                // width={0}
                                // height={0}
                            />
                            
                        </div>
                        <p>{video.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}