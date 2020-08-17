export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    //token: "BQCAqJ2PDow7jxht-wFcG3mb9ZwW9-ybuUs6lFEfIgluMEichN9UexHkJ4k8dH-pVUCBpIrX3uehHvVWXyeSqEJrPGyVhAbIp3v3T1kOsi0-A9BmMZi-tMSB4SVuaAFLNJRVP-VkcooJkagOO2VrLHdpC2I7qMfw7xLNQa0u7Rz0j5QB",
    token: null,
    selected_playlist: null
}

const reducer = (state, action) => {
    console.log('🔥', action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playLists: action.playLists
            }
        case 'SET_SELECTED_PLAYLIST':
            return {
                ...state,
                selected_playlist: action.selected_playlist
            }
        default:
            return state;
    }
}

export default reducer;
