import './Play.css'
import GamesContext from '../../../context/games/GamesContext'
import {playRockGame, startRockGame} from '../../../context/games/GamesActions'
import {useContext} from 'react'

function Play({text, style, rockDispatch}) {
    const {dispatch, rockSelectedElement} = useContext(GamesContext);
    const playGame = () => {
      
      if(rockDispatch === 'PLAY') {
          const status = playRockGame();
          dispatch({
            type: 'PLAY__ROCK_GAME',
            payload: status,
        })
      } else if (rockDispatch === 'START' && rockSelectedElement === null)  {
        alert('Please select an element');
        
      } else if (rockDispatch === 'START' && rockSelectedElement !== null) {
          const status = startRockGame();
          dispatch({
            type: 'START_ROCK_GAME',
            payload: status,
        })
      }
      return true
    }
    
    return (
        <div className="play-button" style={style}>
            <button className="play-text" onClick={playGame}>{text}</button>
        </div>
    )
}

export default Play
