import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import {useContext, useEffect} from 'react'
import {fetchFeedback} from '../context/FeedBackActions'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from "./shared/Spinner"


function FeedbackList() {

    const {feedback, isLoading, dispatch} = useContext(FeedbackContext);

    useEffect(() => {
        async function myFeedBack () {
            dispatch({
                type: 'SET_LOADING'})
             const feedback = await fetchFeedback();
             dispatch({
                type: 'GET_FEEDBACK',
                payload: feedback
            })
        }
        myFeedBack();
        
    }, [])


    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }
    
    return isLoading ? (
        <Spinner/>
    ) : (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
                    <FeedbackItem key={item.id} item={item}/>
                </motion.div>
            ))}
            </AnimatePresence>
            
        </div>
    )
}

export default FeedbackList
 