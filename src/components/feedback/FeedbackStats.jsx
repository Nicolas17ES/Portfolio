import {useContext} from 'react'
import FeedbackContext from '../../context/feedback/FeedbackContext'


function FeedbackStats({questionNumber}) {
    const {feedback} = useContext(FeedbackContext);

    let validFeedback = feedback.filter((item) => item.questionNumber == questionNumber)


    const average = Math.round(
    validFeedback.reduce((acc, { rating }) => acc + rating, 0) / validFeedback.length
  )

    return (
        <div className="feedback-stats">
            <h4>{validFeedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}


export default FeedbackStats
