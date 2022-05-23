import FeedbackForm from '../../components/feedback/FeedbackForm'
import FeedbackStats from '../../components/feedback/FeedbackStats'
import FeedbackList from '../../components/feedback/FeedbackList'
import NextArrow from '../shared/NextArrow'

function QuestionTwo() {

    const data = {
        formTitle: "Rate My Android App And Help Me Improve It",
        questionNumber: 2,
        dataLink: "/projects/foundit"
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

export default QuestionTwo
