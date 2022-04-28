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
        owner: false,
        scroll: false,
        showModal: false,
        modal: 0,
        isLoading: false,
        hasAnimated: true,
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
        owner: state.owner,
        scroll: state.scroll,
        showModal: state.showModal,
        modal: state.modal,
        isLoading: state.isLoading,
        hasAnimated: state.hasAnimated,
        dispatch,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext 