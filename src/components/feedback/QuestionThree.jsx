import FeedbackForm from '../../components/feedback/FeedbackForm'
import FeedbackStats from '../../components/feedback/FeedbackStats'
import FeedbackList from '../../components/feedback/FeedbackList'
import NextArrow from '../shared/NextArrow'

function QuestionThree() {
    const data = {
        formTitle: "Rate My Dashboard React App And Help Me Improve It",
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
