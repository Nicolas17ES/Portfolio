import QuestionOne from '../../components/feedback/QuestionOne'
import QuestionTwo from '../../components/feedback/QuestionTwo'
import QuestionThree from '../../components/feedback/QuestionThree'

import FeedbackContext from '../../context/feedback/FeedbackContext'
import { useContext } from 'react'
import {motion} from 'framer-motion'



function Feedback() {
    
  const {questionCount} = useContext(FeedbackContext);





    if( questionCount === 1) {
       return (
         
             <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .4, delay: .1}}
            exit={{opacity: 0, transition: {duration: .2}}}    
        >
          <h1 className="title-all-feed"> <span className="title-main-feed">PORTFOLIO</span><sub className="title-sub-feed">design</sub></h1>
          <QuestionOne/>
        </motion.div>
         

       )

    } else if (questionCount === 2) {
      return (
         <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .4, delay: .1}}
            exit={{opacity: 0, transition: {duration: .2}}}
        >
          <h1 className="title-all-feed"> <span className="title-main-feed">FOUNDIT</span><sub className="title-sub-feed">app</sub></h1>
          <QuestionTwo/>
</motion.div>
       )

    } else if (questionCount === 3){
        return (
         <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .4, delay: .1}}
            exit={{opacity: 0, transition: {duration: .2}}}
        >
          <h1 className="title-all-feed"> <span className="title-main-feed">DASHBOARD</span><sub className="title-sub-feed">web</sub></h1>
          <QuestionThree/>
</motion.div>
       )

    } else {
      return (
         <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .4, delay: .1}}
            exit={{opacity: 0, transition: {duration: .2}}}
        >
          <h1 className="title-all-feed"> <span className="title-main-feed">DASHBOARD</span><sub className="title-sub-feed">web</sub></h1>
          <QuestionThree/>
</motion.div>

       )
    }
           

}

export default Feedback
