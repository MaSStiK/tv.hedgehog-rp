import Season from "@/components/Season/Season"
import { seasons } from "@/lib/series"

export const metadata = {
    title: "Ежиное Телевидение"
}

export default function Home() {
    const entries = Object.entries(seasons);

    return (
        <>
            {entries.map(([key, season], i) => (
                <section key={key}>
                    <Season
                        title={season.title}
                        episodes={season.episodes}
                    />

                    {i !== entries.length - 1 && <hr/>}
                </section>
            ))}
        </>
    )
}
