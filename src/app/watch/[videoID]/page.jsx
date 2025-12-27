import { notFound } from 'next/navigation';
import Player from "@/components/Player/Player"
import Season from "@/components/Season/Season"
import { seasons, getEpisode } from "@/lib/series"

export default function Watch({ params }) {
    const { videoID } = params
    const episode = getEpisode(videoID)

    if (!episode || Object.keys(episode).length === 0) {
        notFound()
    }

    return (
        <>
            <Player videoID={videoID} />
            <hr/>
            {episode.season &&
                <section>
                    <Season
                        title={`Другие серии ${episode.season.slice(1)} сезона`}
                        episodes={seasons[episode.season].episodes}
                        highlightId={episode.videoID}
                    />
                </section>
            }
        </>
    )
}
