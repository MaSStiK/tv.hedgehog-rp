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

    // let video = `/videos/${params.videoID}.mp4`
    let video = "https://drive.google.com/file/d/1hnti2vqzvixmZC3W6HdZjBwmP51AikAj/preview"
    
    return (
        <article>
            <iframe src="https://drive.google.com/file/d/1hnti2vqzvixmZC3W6HdZjBwmP51AikAj/preview" width="640" height="480" allow="autoplay"></iframe>
            
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
