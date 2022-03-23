import {createContext, useReducer} from 'react'
import feedbackReducer from './FeedbackReducer'



const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const initialState = {
        feedback: [],
        loading: false,
        item: {},
        edit: false,
        questionCount: 1,
        likes: [],
        replies: [],
        blurry: false,
    }
    const [state, dispatch] = useReducer(feedbackReducer, initialState)

    return <FeedbackContext.Provider value={{
        feedback: state.feedback,
        feedbackEdit: {
            item: state.item,
            edit: state.edit
        },
        questionCount: state.questionCount,
        likes: state.likes,
        replies: state.replies,
        blurry: state.blurry,
        dispatch,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext 