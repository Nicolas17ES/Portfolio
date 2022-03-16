import QuestionOne from '../../components/feedback/QuestionOne'
import QuestionTwo from '../../components/feedback/QuestionTwo'
import QuestionThree from '../../components/feedback/QuestionThree'
import FeedbackContext from '../../context/feedback/FeedbackContext'
import {useContext} from 'react'



import {Link} from 'react-router-dom'


function Feedback() {
    
  const {questionCount} = useContext(FeedbackContext);


    if( questionCount == 1) {
       return <QuestionOne/>

    } else if (questionCount == 2) {
      return  <QuestionTwo/>

    } else if (questionCount == 3){
        return <QuestionThree/>

    } else {
      return <QuestionThree/>
    }
           

}

export default Feedback
