import './Countdown.css'
import GamesContext from '../../../context/games/GamesContext'
import {resultRockGame} from '../../../context/games/GamesActions'
import {useContext, useEffect} from 'react'

function Countdown() {
    const {dispatchGames} = useContext(GamesContext);

    useEffect(() => {
        setTimeout(function() {
            const status = resultRockGame()
            dispatchGames({
                type: 'STATUS_ROCK_GAME',
                payload: status,
            })
        }, 3780);

    }, [])
    
    return (
        <div className="countdown">
            <span className="countdown-one">3</span>
            <span className="countdown-two">2</span>
            <span className="countdown-three">1</span>
        </div>
    )
}

export default Countdown
