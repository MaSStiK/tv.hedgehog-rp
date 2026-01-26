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

export async function GET(req) {
    const url = new URL(req.url)
    const last = episodes.at(-1)

    // Если серия не найдена
    if (!last) {
        return Response.json(
            { success: false, data: lastEpisode },
            { headers: { ...corsHeaders, "Content-Type": "application/json" }}
        )
    }

    const lastEpisode = { ...last }
    delete lastEpisode.src // Удаляем src

    // Заменяем ссылку на просмотр на ссылку на сайт
    lastEpisode.href `${url.origin}/watch/${last.videoID}`
    
    // Заменяем ссылку на превью
    lastEpisode.thumbnail `${url.origin}/${String(last.thumbnail).replace(/^\//, "")}`

    return Response.json(
        { success: true, data: lastEpisode },
        { headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
}