import { episodes } from "@/lib/series"

export async function GET(req) {
    const url = new URL(req.url)
    const lastEpisode = episodes.at(-1) || null

    // Заменяем ссылку на просмотр на ссылку на сайт
    lastEpisode.src = `${url.origin}/watch/${lastEpisode.videoID}`

    // Заменяем ссылку на превью
    lastEpisode.thumbnail = `${url.origin}/${lastEpisode.thumbnail}`

    return Response.json({
        success: true,
        data: lastEpisode,
    })
}