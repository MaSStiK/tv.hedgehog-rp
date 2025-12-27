import Season from "@/components/Season/Season"
import { seasons } from "@/lib/series"

export default function AllSeasons() {
    const entries = Object.entries(seasons).sort(
        ([a], [b]) => Number(b.slice(1)) - Number(a.slice(1)) // сортировка по убыванию
    )

    return (
        <>
            {entries.map(([seasonKey, season], i) => (
                <section key={seasonKey}>
                    <Season
                        title={season.title}
                        season={season.episodes}
                    />

                    {i !== entries.length - 1 && <hr/>}
                </section>
            ))}
        </>
    )
}