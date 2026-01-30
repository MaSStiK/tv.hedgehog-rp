import { episodes } from "@/lib/series"

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: corsHeaders,
    })
}

// Получение последнего эпизода
export async function GET() {
    const episode = episodes.at(-1)

    // Если серия не найдена
    if (!episode) {
        return Response.json(
            {
                message: "Эпизод не найден"
            },
            {
                status: 404,
                headers: {
                    ...corsHeaders,
                    "Content-Type": "application/json"
                }
            }
        )
    }

    const thumbnail = String(episode.thumbnail).replace(/^\//, "")

    // Собираем новый объект только с нужными полями
    const lastEpisode = {
        videoID: episode.videoID,
        title: episode.title,
        views: episode.views,
        publishedAt: episode.publishedAt,
        href: `https://tv.hedgehog-rp.ru/watch/${episode.videoID}`,
        thumbnail: `https://tv.hedgehog-rp.ru/${thumbnail}`,
    }

    return Response.json(
        lastEpisode,
        {
            status: 200,
            headers: {
                ...corsHeaders,
                "Content-Type": "application/json"
            }
        }
    )
}