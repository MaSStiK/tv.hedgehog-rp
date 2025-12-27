import {
    SET_SEASONS,
    SET_EPISODES,
} from "./actions"

const initialState = {
    seasons: {},
    episodes: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEASONS:
            return {
                ...state,
                seasons: action.payload,
            };
        case SET_EPISODES:
            return {
                ...state,
                episodes: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;