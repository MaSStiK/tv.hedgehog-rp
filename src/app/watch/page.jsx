import { redirect } from "next/navigation"

export default function WatchEmpty() {
    // Если ссылка просто /watch - значит в ссылке нету id видео
    // Редиректим на главную
    redirect("/")
}