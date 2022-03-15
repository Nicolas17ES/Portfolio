import {createContext, useReducer} from 'react'
import feedbackReducer from './FeedbackReducer'
import{ v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const initialState = {
        feedback: [],
        loading: false,
        item: {},
        edit: false
    }
    const [state, dispatch] = useReducer(feedbackReducer, initialState)

    return <FeedbackContext.Provider value={{
        feedback: state.feedback,
        feedbackEdit: {
            item: state.item,
            edit: state.edit
        },
        dispatch,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext 