import FeedbackForm from './FeedbackForm'
import FeedbackStats from './FeedbackStats'
import FeedbackList from './FeedbackList'
import NextArrow from '../shared/NextArrow'

import {motion} from 'framer-motion'


function QuestionOne() {

    const data = {
        formTitle: "Rate My Portfolio And Help Me Improve It",
        questionNumber: 1,
        dataLink: "/home"
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
                <FeedbackStats questionNumber={data.questionNumber} />
                <FeedbackList questionNumber={data.questionNumber} />
            </>
        </div>
    )
}

export default QuestionOne
