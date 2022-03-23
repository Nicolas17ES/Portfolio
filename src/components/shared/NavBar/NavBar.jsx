
import {Link} from 'react-router-dom'
import {FaHamburger, FaBars, FaTimes, FaDog} from 'react-icons/fa'
import {useRef} from 'react'
import './NavBar.css'

import { useContext } from 'react'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import GamesContext from '../../../context/games/GamesContext'



function NavBar() {
const {blurry, dispatch} = useContext(FeedbackContext);
const {dispatchGames} = useContext(GamesContext);

const navRef = useRef();
const showNavbar= () => {
  
  navRef.current.classList.toggle("responsive_nav")
  dispatch({
    type: 'BLURRY_BACKGROUND',
    payload: !blurry
  })
  
  
}

//RESTART GAME//

const reStartGame = () => {
    dispatchGames({
        type: 'STATUS_ROCK_GAME',
        payload: 'QUIT',
    })
    dispatchGames({
        type: 'SELECTED_ELEMENT_ROCK_GAME',
        payload: null,
    })
}

//HIDE NAVBAR WHEN CLICKIN LINK//

const hideResponsiveNavBar = () => {
  if(blurry === true){
    navRef.current.classList.remove("responsive_nav")
    dispatch({
      type: 'BLURRY_BACKGROUND',
      payload: false,
    })
  }
}

  
  
    return (
      <>
      <header>
        <div className="left-side flex">
          <h3><FaDog className="logo" size={30}/></h3>
        </div>
         
         <nav ref={navRef}>
           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes size={24}/>
            </button>
           <Link to="/home" onClick={hideResponsiveNavBar}>Home</Link>
           <Link to="/notfound" onClick={hideResponsiveNavBar}>Projects</Link>
           <Link to="/rock" onClick={reStartGame, hideResponsiveNavBar}>Games</Link>
           <Link to="/feedback" onClick={hideResponsiveNavBar}>Feedback</Link>
           <Link to="/notfound" onClick={hideResponsiveNavBar}>About</Link>


         </nav>
         <button className="nav-btn burger" onClick={showNavbar}>
           <FaHamburger size={24}/>
         </button>
       </header>
       {/* <div className="divisor" ref={divisor}>Hey</div> */}
      </>

       
    )
}

export default NavBar
