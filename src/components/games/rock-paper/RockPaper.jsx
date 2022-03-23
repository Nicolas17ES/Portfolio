import './RockPaper.css'
import { ReactComponent as Paper }  from '../../assets/paper.svg'
import  {ReactComponent as Rock } from '../../assets/rock2.svg'
import {ReactComponent as Scissors } from '../../assets/scissors.svg'
import {useRef, useState, useEffect} from 'react'

import {useContext} from 'react'
import GamesContext from '../../../context/games/GamesContext'


function RockPaper() {
    const {dispatchGames, rockSelectedElement} = useContext(GamesContext);

    const selectedRock = useRef();
    const selectedPaper = useRef();
    const selectedScissors = useRef();

    const setSelectedElement = (selectedElement) => {
        if(rockSelectedElement === selectedElement){
            dispatchGames({
                type: 'SELECTED_ELEMENT_ROCK_GAME',
                payload: null
            })
        } else {
            dispatchGames({
                type: 'SELECTED_ELEMENT_ROCK_GAME',
                payload: selectedElement
            })
        }
        
    }

   

    const selectRock= () => { 
        if(selectedPaper.current.classList.contains("background-icon")){
            selectedPaper.current.classList.toggle("background-icon") 
            selectedRock.current.classList.toggle("background-icon")

        } else if (selectedScissors.current.classList.contains("background-icon")){
            selectedScissors.current.classList.toggle("background-icon")
            selectedRock.current.classList.toggle("background-icon")
        }  else {
            selectedRock.current.classList.toggle("background-icon")
        }
    }

    const selectPaper= () => {
         if(selectedRock.current.classList.contains("background-icon")){
            selectedRock.current.classList.toggle("background-icon") 
            selectedPaper.current.classList.toggle("background-icon")

        } else if (selectedScissors.current.classList.contains("background-icon")){
            selectedScissors.current.classList.toggle("background-icon")
            selectedPaper.current.classList.toggle("background-icon")
        }  else {
            selectedPaper.current.classList.toggle("background-icon")
        }  
    }

    const selectScissors= () => {
         if(selectedPaper.current.classList.contains("background-icon")){
            selectedPaper.current.classList.toggle("background-icon") 
            selectedScissors.current.classList.toggle("background-icon")

        } else if (selectedRock.current.classList.contains("background-icon")){
            selectedRock.current.classList.toggle("background-icon")
            selectedScissors.current.classList.toggle("background-icon")
        }  else {
            selectedScissors.current.classList.toggle("background-icon")
        }
    }

    return (
        <div className="rock-icons">
            <div ref={selectedRock} onClick={() => { selectRock(); setSelectedElement(1);}} className="rock-elements elements"><Rock className="rock svg mask"/><p className="text-icons">Rock</p></div>
            <div ref={selectedPaper} onClick={() => { selectPaper(); setSelectedElement(2);}} className="paper-elements elements"><Paper className="paper svg mask"/><p className="text-icons">Paper</p></div>
            <div ref={selectedScissors} onClick={() => { selectScissors(); setSelectedElement(3);}} className="scissors-elements elements"><Scissors className="scissors svg mask"/><p className="text-icons">Scissors</p></div>
        </div>
    )
}

export default RockPaper
