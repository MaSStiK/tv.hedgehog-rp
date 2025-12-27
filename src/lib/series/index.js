import season1 from "./season-1"
import season2 from "./season-2"
import season3 from "./season-3"
import season4 from "./season-4"

// Массив всех сезонов
export const seasons = {
    s1: {
        title: "Сезон 1",
        episodes: season1
    },
    s2: {
        title: "Сезон 2",
        episodes: season2
    },
    s3: {
        title: "Сезон 3",
        episodes: season3
    },
    s4: {
        title: "Сезон 4",
        episodes: season4
    }
}

// Массив всех эпизодов
export const episodes = Object.entries(seasons).flatMap(
    ([seasonKey, { title, episodes }]) => {
        const seasonNumber = seasonKey.slice(1); // "4"

        return episodes.map(episode => ({
            ...episode,
            seasonKey,          // "s4"
            seasonNumber,       // "4"
            seasonTitle: title, // "Сезон 4"
        }));
    }
)

export function getEpisode(videoID) {
    const episode = episodes.find(episode => episode.videoID === videoID)
    return episode
}