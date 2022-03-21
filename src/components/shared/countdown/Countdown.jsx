import './Countdown.css'
import GamesContext from '../../../context/games/GamesContext'
import {useContext, useEffect} from 'react'

function Countdown() {
    const {dispatch} = useContext(GamesContext);

    useEffect(() => {
        setTimeout(function() {
        dispatch({
            type: 'DISPLAY_RESULT',
            payload: true,
        })
        dispatch({
            type: 'PLAY__ROCK_GAME',
            payload: 'RESULT',
        })
        }, 5680);

    }, [])
    
    return (
        <div className="countdown">
            <span className="countdown-one">1</span>
            <span className="countdown-two">2</span>
            <span className="countdown-three">3</span>
        </div>
    )
}

export default Countdown
