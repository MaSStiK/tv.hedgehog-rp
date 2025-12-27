import { redirect } from "next/navigation"

// Редиректим на главную
export default function WatchEmpty() {
    // Если ссылка просто /watch - значит в ссылке нету id видео
    redirect("/")
}