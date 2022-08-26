import './Answers.css'
import Clock from '../../../components/games/clock/Clock'
import Tomorrow from '../../../components/games/tomorrow/Tomorrow'
import {Link, useNavigate} from 'react-router-dom'
import {useContext, useEffect} from 'react'
import FeedbackContext from '../../../context/feedback/FeedbackContext'


function Answers() {

    const navigate = useNavigate();
    const {riddleAnswer, dispatch} = useContext(FeedbackContext);

    const promptRiddle = () => {
        let reply = prompt(' I never was, I am always to be; everyone is looking, but no one sees me. What am I?');
        if(reply === 'tomorrow' || reply === 'Tomorrow' ||  reply === 'TOMORROW'){
            dispatch({
                    type: 'ANSWER_RIDDLE',
                    payload: reply
                })
        //    navigate('/games/answers')
       } else if ( reply === ''){
           return null;
       } else {
           alert('Wrong answer')
       }
    }

    if(riddleAnswer === 'time' || riddleAnswer === 'TIME' || riddleAnswer === 'Time' ){
        return (
            <div className="answers">
                <Clock/>
                <div className="bottom-asnwers">
                    <button className="more-riddles" onClick={promptRiddle}>
                        <h3 className="block-title size shake"><sub>next </sub>RIDDLE</h3>
                    </button>
                    <Link to={'/games'}>
                        <h3 className="block-title size shakeit"><sub>take me </sub>OUT</h3>
                    </Link>
                </div>
            </div>
        )
    } else if (riddleAnswer === 'tomorrow' || riddleAnswer === 'TOMORROW' || riddleAnswer === 'Tomorrow') {
        return (
            <div className="answers">
                <Tomorrow/>
                <div className="bottom-asnwers">
                    <button className="more-riddles">
                        <h3 className="block-title sizePlus"><sub className="sizePlus blur">what lies between the</sub> <span className="eye-span">EYES</span></h3>
                    </button>
                    <Link to={'/games'}>
                        <h3 className="block-title sizeMedium shakeit"><sub className="">take me </sub>OUT</h3>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Answers
