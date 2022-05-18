import './Play.css'
import GamesContext from '../../../context/games/GamesContext'
import {playRockGame, startRockGame, quitRockGame} from '../../../context/games/GamesActions'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'

function Play({text, style, rockDispatch}) {
    const {dispatchGames, rockSelectedElement} = useContext(GamesContext);
    const navigate = useNavigate();
    const playGame = () => {
      
      if(rockDispatch === 'PLAY') {
          const status = playRockGame();
          dispatchGames({
            type: 'STATUS_ROCK_GAME',
            payload: status,
        })
      } else if (rockDispatch === 'START' && rockSelectedElement === null)  {
        alert('Please select an element');
        
      } else if (rockDispatch === 'START' && rockSelectedElement !== null) {
         const status = startRockGame();
         dispatchGames({
            type: 'STATUS_ROCK_GAME',
            payload: status,
        })
      } else if (rockDispatch === 'QUIT') {
          navigate('/home')
          const status = quitRockGame();
          dispatchGames({
              type: 'STATUS_ROCK_GAME',
              payload: status,
          })
          dispatchGames({
              type: 'SELECTED_ELEMENT_ROCK_GAME',
              payload: null,
          })
      }  else if (rockDispatch === 'PLAY AGAIN') {
          const status = playRockGame();
          dispatchGames({
              type: 'STATUS_ROCK_GAME',
              payload: status,
          })
          dispatchGames({
              type: 'SELECTED_ELEMENT_ROCK_GAME',
              payload: null,
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
