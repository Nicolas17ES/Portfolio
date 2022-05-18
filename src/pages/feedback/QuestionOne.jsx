import FeedbackForm from '../../components/feedback/FeedbackForm'
import FeedbackStats from '../../components/feedback/FeedbackStats'
import FeedbackList from '../../components/feedback/FeedbackList'
import {Link} from 'react-router-dom'

function QuestionOne() {

    const data = {
        formTitle: "Please rate my Portfolio and help me improve it",
        questionNumber: 1,
    }
    
    
    return (
        <div>
             <>
                <FeedbackForm data={data}/>
                <FeedbackStats questionNumber={data.questionNumber} />
                <FeedbackList questionNumber={data.questionNumber} />
            </>
        </div>
    )
}

export default QuestionOne
