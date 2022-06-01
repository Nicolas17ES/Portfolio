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
          <ProjectTittle title={"PORTFOLIO"}/>
          <QuestionOne/>
         </>

       )

    } else if (questionCount === 2) {
      return (
         <>
          <ProjectTittle title={"FOUNDIT"}/>
          <QuestionTwo/>
         </>

       )

    } else if (questionCount === 3){
        return (
         <>
          <ProjectTittle title={"DASHBRD"}/>
          <QuestionThree/>
         </>

       )

    } else {
      return (
         <>
          <ProjectTittle title={"DASHBRD"}/>
          <QuestionThree/>
         </>

       )
    }
           

}

export default Feedback
