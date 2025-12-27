import Season from "@/components/Season/Season"
import { seasons } from "@/lib/series"

// Отображение сезона выбранной для просмотра эпизода
export default function PlayerSeason({ episode }) {
    // Текущий просматриваемый сезон
    const currentSeason = seasons[episode.seasonKey]

    return (
        <section>
            <Season
                title={`Другие серии ${episode.seasonNumber} сезона`}
                episodes={currentSeason.episodes}
                highlightId={episode.videoID}
            />
        </section>
    )
}
