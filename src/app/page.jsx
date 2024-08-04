"use client";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import VideoRow from "@/components/VideoRow/VideoRow";
import seasons from "@/components/seasons.js";

export default function Home() {
    return (<>
        {Object.keys(seasons).map((season, i) => (
            <section key={i}>
                <VideoRow
                    title={seasons[season].title}
                    videos={seasons[season].videos}
                />

                {i !== Object.keys(seasons).length - 1 && <hr/>}
            </section>
        ))}
    </>)
}
