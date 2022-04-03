
import {Link} from 'react-router-dom'
import {FaHamburger, FaBars, FaTimes, FaDog} from 'react-icons/fa'
import {useRef} from 'react'
import './NavBar.css'

import { useContext } from 'react'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import GamesContext from '../../../context/games/GamesContext'
import { isOwner } from '../../../context/feedback/FeedBackActions'



function NavBar() {
const {blurry, dispatch, showModal} = useContext(FeedbackContext);
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

// RESTART PLUS HIDENNAVBAR //

const reStartNavBar = () => {
  hideResponsiveNavBar();
  reStartGame()
}

//OWNER//
const handleClick = (e) => {
    if(e.detail === 3){
      let response = prompt('What shines brighter than the sun?');
      if(response === 'myself'){
        const owner = isOwner(response);
        dispatch({
          type: 'IS_OWNER',
          payload: owner
        })
      }
    }

}

//HIDE MODAL//

const hideModal = () => {
  dispatch({
    type: "SHOW_MODAL",
    payload: false,
  })
}
  
    return (
      <>
      <header onClick={hideModal}>
        <div className="left-side flex">
          <h3><FaDog onClick={handleClick} className="logo" size={30}/></h3>
        </div>
         
         <nav ref={navRef}>
           <button className="nav-btn close-btn" onClick={showNavbar}>
            <FaTimes className="nav-close-btn" size={24}/>
            </button>
              <div className="nav-links">
                  <div className="link-one">          
                      <Link className="link-nav" to="/home" onClick={reStartNavBar}>Home</Link>
                  </div>
                  <div className="link-two">
                      <Link className="link-nav" to="/projects" onClick={reStartNavBar}>Projects</Link>
                  </div>
                  <div className="link-three">
                      <Link className="link-nav" to="/rock" onClick={reStartNavBar}>Games</Link>
                  </div>
                  <div className="link-four">
                      <Link className="link-nav" to="/feedback" onClick={reStartNavBar}>Feedback</Link>
                  </div>
                  <div className="link-five">
                      <Link className="link-nav" to="/about" onClick={reStartNavBar}>About</Link>
                  </div>
                  <div className="link-six">
                      <Link className="link-nav about" to="/contact" onClick={reStartNavBar}>Contact</Link>
                  </div>
              </div>
         </nav>
         <button className="nav-btn burger" onClick={showNavbar}>
           <FaHamburger size={24}/>
         </button>
       </header>
       <div className="divisor"></div>
      </>

       
    )
}

export default NavBar
