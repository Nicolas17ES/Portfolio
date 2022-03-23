const feedbackReducer = (state, action) => {
    switch(action.type){
        case 'GET_FEEDBACK':
            return {
                ...state,
                feedback: action.payload,
                loading: false
            }
        case 'EDIT_FEEDBACK':
            return {
                ...state,
                item: action.payload,
                edit: true,
            }
        case 'UPDATE_FEEDBACK':
            return {
                ...state,
                edit: false,
            }
        case 'GET_LIKES':
            return {
                ...state,
                likes: action.payload,
            }
        case 'GET_REPLIES':
            return {
                ...state,
                replies: action.payload,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'CHANGE_QUESTION':
            return {
                ...state,
                questionCount: action.payload,
            }
        case 'BLURRY_BACKGROUND':
            return {
                ...state,
                blurry: action.payload,
            }
        default: 
            return state;
    }
}

export default feedbackReducer