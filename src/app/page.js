"use client";
import ReactPlayer from "react-player";
import Link from 'next/link'
import { useState, useEffect } from "react";
import Image from "next/image"

import seasons from "@/components/videos/seasons";
import style from "@/components/videos/videos.module.css";

export default function Home() {
    return (
        <>
            {seasons.map((season, i) => (
                <section key={i} className={style.videoSection}>
                    <h1 className={style.videoSeason}>{season.title}</h1>
                    <div className={style.videoRow}>
                        {season.videos.map((video, i) => (
                            <Link className={style.video} key={i} href={`/watch/${video.videoID}`}>
                                <div className={style.videoThumbnail}>
                                    <Image
                                        src={video.thumbnail}
                                        alt="thumbnails"
                                        // width={0}
                                        // height={0}
                                    />
                                    
                                </div>
                                <p>{video.title}</p>
                            </Link>
                            
                        ))}
                    </div>
                    
                    {i !== seasons.length - 1 && <hr/>}
                </section>
            ))}
        </>
    );
}
