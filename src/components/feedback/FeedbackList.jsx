import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import {useContext, useEffect} from 'react'
import {fetchFeedback} from '../../context/feedback/FeedBackActions'
import FeedbackContext from '../../context/feedback/FeedbackContext'
import Spinner from "../shared/Spinner"


function FeedbackList({questionNumber}) {

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

        return <div className="feedback-list"><p>No feedback yet</p></div>
    }

    let validFeedback = feedback.filter((item) => item.questionNumber == questionNumber)

    
    return isLoading ? (
        <Spinner/>
    ) : (
        <div className="feedback-list">
            <AnimatePresence>
            {validFeedback.map((item) => (
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
 