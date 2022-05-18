import FeedbackForm from './FeedbackForm'
import FeedbackStats from './FeedbackStats'
import FeedbackList from './FeedbackList'
import NextArrow from '../shared/NextArrow'


function QuestionOne() {

    const data = {
        formTitle: "Please rate my Portfolio and help me improve it",
        questionNumber: 1,
        dataLink: "/home"
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
