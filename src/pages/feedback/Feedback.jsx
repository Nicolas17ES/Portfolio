import QuestionOne from '../../components/feedback/QuestionOne'
import QuestionTwo from '../../components/feedback/QuestionTwo'
import QuestionThree from '../../components/feedback/QuestionThree'
import ProjectTittle from '../../components/games/game-title/GameTitle'

import FeedbackContext from '../../context/feedback/FeedbackContext'
import {useContext} from 'react'


function Feedback() {
    
  const {questionCount} = useContext(FeedbackContext);


    if( questionCount === 1) {
       return (
         <>
          <h1 className="title-all-feed"> <span className="title-main-feed">PORTFOLIO</span><sub className="title-sub-feed">design</sub></h1>
          <QuestionOne/>
         </>

       )

    } else if (questionCount === 2) {
      return (
         <>
          <h1 className="title-all-feed"> <span className="title-main-feed">FOUNDIT</span><sub className="title-sub-feed">app</sub></h1>
          <QuestionTwo/>
         </>

       )

    } else if (questionCount === 3){
        return (
         <>
          <h1 className="title-all-feed"> <span className="title-main-feed">DASHBOARD</span><sub className="title-sub-feed">web</sub></h1>
          <QuestionThree/>
         </>

       )

    } else {
      return (
         <>
          <h1 className="title-all-feed"> <span className="title-main-feed">DASHBOARD</span><sub className="title-sub-feed">web</sub></h1>
          <QuestionThree/>
         </>

       )
    }
           

}

export default Feedback
