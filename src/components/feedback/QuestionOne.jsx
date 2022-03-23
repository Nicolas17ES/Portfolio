import FeedbackForm from './FeedbackForm'
import FeedbackStats from './FeedbackStats'
import FeedbackList from './FeedbackList'
import NextArrow from '../shared/NextArrow'
import {Link} from 'react-router-dom'

function QuestionOne() {

    const data = {
        formTitle: "Please rate my Portfolio and help me improve it",
        questionNumber: 1,
    }
    
    
    return (
        <div className="questionPages">
             <>
                <FeedbackForm data={data}/>
                <NextArrow/>
                <FeedbackStats questionNumber={data.questionNumber} />
                <FeedbackList questionNumber={data.questionNumber} />
            </>
        </div>
    )
}

export default QuestionOne
