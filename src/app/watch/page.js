"use client";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation"

export default function WatchEmpty() {
    // Если в ссылке нету id видео - перекидываем на главную
    useEffect(() => {
        redirect("/")
    }, [])

    return (
        <article></article>
    )
}
