import FeedbackForm from '../../components/feedback/FeedbackForm'
import FeedbackStats from '../../components/feedback/FeedbackStats'
import FeedbackList from '../../components/feedback/FeedbackList'
import {Link} from 'react-router-dom'

function QuestionTwo() {

    const data = {
        formTitle: "Please rate my Android App and help me improve it",
        questionNumber: 2,
    }

    return (
        <div>
            <>
                <FeedbackForm data={data}/>
                <FeedbackStats questionNumber={data.questionNumber}/>
                <FeedbackList questionNumber={data.questionNumber}/>
            </>
        </div>
    )
}

export default QuestionTwo
