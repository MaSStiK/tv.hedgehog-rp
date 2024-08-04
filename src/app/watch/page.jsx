"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation"

export default function WatchEmpty() {
    // Если в ссылке нету id видео - перекидываем на главную
    useEffect(() => {
        redirect("/")
    }, [])

    return (
        <></>
    )
}
