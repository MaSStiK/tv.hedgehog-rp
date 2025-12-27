export const SET_SEASONS = "SET_SEASONS"
export const SET_EPISODES = "SET_EPISODES"
export const SET_USER_NAME = "SET_USER_NAME"
export const SET_CHATS = "SET_CHATS"

export const setSeasons = seasons => ({
    type: SET_SEASONS,
    payload: seasons
})

export const setEpisodes = episodes => ({
    type: SET_EPISODES,
    payload: episodes
})