import './Paper.css'
import RockPaper from '../../components/games/rock-paper/RockPaper'
import GameTitle from '../../components/shared/game-title/GameTitle'
import PlayButton from '../../components/shared/play-button/Play'
import Countdown from '../../components/shared/countdown/Countdown'
import Result from '../../components/games/rock-paper/ResultRockPaper'

import {useContext} from 'react'
import GamesContext from '../../context/games/GamesContext'

function Paper() {

    const {rockStatus, rockSelectedElement, rockDisplayResult} = useContext(GamesContext);

    const stylePlayOne = {
        'margin-top': '160px'
    }
    const stylePlayTwo = {
        'margin-top': '20px'
    }

    const display = () => {
        if(rockStatus === null || rockStatus === 'QUIT'){
            return (
                <>
                    <GameTitle title="Rock   Paper   Scissors"/>
                    <PlayButton text="PLAY" style={stylePlayOne} rockDispatch={'PLAY'}/> 
                </>
            )
        } else if(rockStatus === 'PLAY'){
            return (
                <>
                    <GameTitle title="Choose One"/>
                    <RockPaper/>
                    <PlayButton text="START GAME"  style={stylePlayTwo} rockDispatch={'START'}/>
                </>
            )
        } else if (rockStatus === 'START'){
            return (
                <>
                    <Countdown/>
                </>
            )
        } else if (rockDisplayResult === true && rockStatus === 'RESULT'){
            return (
                <>
                    <Result/>
                </>
            )
        }
    }

    return (
        <div className="rock-game">
           {display()}
        </div>
    )
}

export default Paper
