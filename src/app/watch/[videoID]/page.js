"use client";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { redirect, useParams } from "next/navigation"

export default function Watch() {

    const [domLoaded, setDomLoaded] = useState(false)

    useEffect(() => {
        setDomLoaded(true)
    }, []);

    const params = useParams()
    console.log(params);

    let video = `/videos/${params.videoID}.mp4`
    
    return (
        <article>
            {domLoaded && <>
                <div className="video-player">
                    <ReactPlayer
                        url={video}
                        controls={true}
                        pip={true}
                    />
                    <source src={video} type="video/mp4" />
                </div>
            </> }
        </article>
    )
}
