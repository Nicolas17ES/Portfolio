import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {nextQuestion, previousQuestion} from '../../context/feedback/FeedBackActions'
import FeedbackContext from '../../context/feedback/FeedbackContext'
import {useContext} from 'react'




function NextArrow() {

    const {questionCount, dispatch} = useContext(FeedbackContext);
  

    const toNextQuestion = () => {
       const number = nextQuestion(questionCount)
        dispatch({
            type: "CHANGE_QUESTION",
            payload: number
        })
    }

    const toPreviousQuestion = () => {
       const number = previousQuestion(questionCount)
        dispatch({
            type: "CHANGE_QUESTION",
            payload: number
        })
    }

    if(questionCount === 1) {
        return (
        <>
        <div className="nextArrow">
        
            {/* <BsFillArrowLeftCircleFill className="arrow" onClick={toPreviousQuestion} size={30}/> */}
            <BsFillArrowRightCircleFill className="arrow" onClick={toNextQuestion} size={30}/>
        </div>
        

        </>
    )
    } else if (questionCount > 1 && questionCount < 3) {
        return (
        <>
        <div className="previousArrow">
        
            <BsFillArrowLeftCircleFill className="arrow" onClick={toPreviousQuestion} size={30}/>
            <BsFillArrowRightCircleFill className="arrow" onClick={toNextQuestion} size={30}/>
        </div>
        

        </>
    )
    } else if (questionCount === 3) {
         return (
        <>
        <div className="previousArrow">
            <BsFillArrowLeftCircleFill className="arrow" onClick={toPreviousQuestion} size={30}/>
        </div>
        

        </>
    )
    }

}

export default NextArrow
