import FeedbackForm from '../../components/feedback/FeedbackForm'
import FeedbackStats from '../../components/feedback/FeedbackStats'
import FeedbackList from '../../components/feedback/FeedbackList'
import NextArrow from '../shared/NextArrow'
import {motion} from 'framer-motion'

function QuestionThree() {
    const data = {
        formTitle: "Rate My Dashboard React App And Help Me Improve It",
        questionNumber: 3,
        dataLink: "/projects/dashboard"
    }

    return (
        <div className="questionPages">
            <>
            <motion.div
                initial={{rotateY: 180}}
                animate={{rotateY: 360}}
                transition={{duration: .7, delay: 0}}
             >
                <FeedbackForm data={data}/>
            </motion.div>
                <NextArrow/>
                <FeedbackStats questionNumber={data.questionNumber}/>
                <FeedbackList questionNumber={data.questionNumber}/>
            </>
        </div>
    )
}

export default QuestionThree
