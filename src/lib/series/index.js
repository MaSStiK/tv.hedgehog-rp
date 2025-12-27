import season1 from "./season-1"
import season2 from "./season-2"
import season3 from "./season-3"
import season4 from "./season-4"

// Массив всех сезонов
export const seasons = {
    s4: {
        title: "Сезон 4",
        episodes: season4
    },
    s3: {
        title: "Сезон 3",
        episodes: season3
    },
    s2: {
        title: "Сезон 2",
        episodes: season2
    },
    s1: {
        title: "Сезон 1",
        episodes: season1
    }
}

// Массив всех эпизодов
export const episodes = Object.entries(seasons).flatMap(
    ([season, { title, episodes }]) =>
        episodes.map(ep => ({
            ...ep,
            season,
            seasonTitle: title,
        }))
)

export function getEpisode(videoID) {
    const episode = episodes.find(episode => episode.videoID === videoID)
    return episode
}