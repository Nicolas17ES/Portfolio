import FeedbackForm from '../../components/feedback/FeedbackForm'
import FeedbackStats from '../../components/feedback/FeedbackStats'
import FeedbackList from '../../components/feedback/FeedbackList'
import NextArrow from '../shared/NextArrow'
import {Link} from 'react-router-dom'

function QuestionThree() {
    const data = {
        formTitle: "Please rate my Dashboard React App",
        questionNumber: 3,
        dataLink: "/projects/dashboard"
    }

    return (
        <div className="questionPages">
            <>
                <FeedbackForm data={data}/>
                <NextArrow/>
                <FeedbackStats questionNumber={data.questionNumber}/>
                <FeedbackList questionNumber={data.questionNumber}/>
            </>
        </div>
    )
}

export default QuestionThree
