const gamesReducer = (state, action) => {
    switch(action.type){
        case 'STATUS_ROCK_GAME':
            return {
                ...state,
                rockStatus: action.payload,
            }
        case 'SELECTED_ELEMENT_ROCK_GAME':
            return {
                ...state,
                rockSelectedElement: action.payload,
            }
        case 'DISPLAY_RESULT':
            return {
                ...state,
                rockDisplayResult: action.payload,
            }
        case 'RANDOM_NUMBER':
            return {
                ...state,
                randomNumber: action.payload,
            }
        default: 
                return state;
    }
}

export default gamesReducer