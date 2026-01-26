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

export async function GET() {
    const last = episodes.at(-1)

    // Если серия не найдена
    if (!last) {
        return Response.json(
            { success: false, episode: null },
            { headers: { ...corsHeaders, "Content-Type": "application/json" }}
        )
    }

    const lastEpisode = { ...last }
    delete lastEpisode.src // Удаляем src

    // Заменяем ссылку на просмотр на ссылку на сайт
    lastEpisode.href = `https://tv.hedgehog-rp.ru/watch/${last.videoID}`
    
    // Заменяем ссылку на превью
    lastEpisode.thumbnail = `https://tv.hedgehog-rp.ru/${String(last.thumbnail).replace(/^\//, "")}`

    return Response.json(
        { success: true, episode: lastEpisode },
        { headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
}