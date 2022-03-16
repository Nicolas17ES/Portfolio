import {createContext, useReducer} from 'react'
import feedbackReducer from './FeedbackReducer'
import{ v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const initialState = {
        feedback: [],
        loading: false,
        item: {},
        edit: false,
        questionCount: 1,
        likes: []
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
        dispatch,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext 