import './MainGames.css'
import {useContext, useEffect} from 'react'
import FeedbackContext from '../../context/feedback/FeedbackContext'
import {useNavigate, Link} from 'react-router-dom'


function MainGames() {

    const navigate = useNavigate();
    const {riddleAnswer, dispatch} = useContext(FeedbackContext);

    const alertLeave = () => {
       let reply = prompt('Until I am measured, I am not known. Yet how you miss me, When I have flown. What am I?');
       if(reply === 'time' || reply === 'Time' ||  reply === 'TIME'){
           dispatch({
                    type: 'ANSWER_RIDDLE',
                    payload: reply
                })
           navigate('/games/answers');
           
       } else if ( reply === ''){
           return null;
       } else {
           alert('Wrong answer')
       }
        
    }



    return (
        <div className="main-games">
            <h1 className="title-all"> <sub className="title-sub">play a</sub><span className="title-main">GAME</span></h1>
            <div className="games-page-titles">
                <h1 className="title-all-games" onClick={alertLeave} ><span className="title-main"> ' take a GUESS '</span></h1>
                <Link to={'/games/rock'}>
                    <h1 className="title-all-games"><span className="title-main"> ' view GAMES '</span></h1>
                </Link>
            </div>
            <div className="tennis-table">
                <div className="table-left">
                    <button className="leave-button ball b2" onClick={alertLeave}></button>
                </div>
                <div className="table-right">
                    <Link to={'/games/rock'} className="games-button ball b2"></Link>
                </div>
            </div>
        </div>
    )
}

export default MainGames
