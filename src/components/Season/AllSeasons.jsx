import Season from "@/components/Season/Season"
import { seasons } from "@/lib/series"
import { Fragment } from "react"

export default function AllSeasons() {
    const entries = Object.entries(seasons).sort(
        ([a], [b]) => Number(b.slice(1)) - Number(a.slice(1)) // Сортировка по убыванию
    )

    return (
        <>
            {entries.map(([seasonKey, season]) => (
                <Fragment key={seasonKey}>
                    <hr/>
                    <section >
                        <Season
                            title={season.title}
                            episodes={season.episodes}
                        />
                    </section>
                </Fragment>
            ))}
        </>
    )
}