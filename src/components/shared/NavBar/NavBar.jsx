
import {Link} from 'react-router-dom'
import {FaHamburger, FaBars, FaTimes, FaDog} from 'react-icons/fa'
import {BiDownArrow} from 'react-icons/bi'
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
const dropdown = useRef();
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

// toggle blurry on mouse enter dropdown

// const toggleBlurry = () => {
  
//   dispatch({
//       type: 'BLURRY_BACKGROUND',
//       payload: !blurry,
//     })
// }

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

// ON DROPDOWN CLICK OPEN MINI-MENU

const showDropdown = () => {
  dropdown.current.classList.toggle("showDropdown")
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

// scroll to about component//
  const redirectToAbout = () => {
    hideResponsiveNavBar();
    reStartGame()
      dispatch({
                type: 'SCROLL_VIEW',
                payload: 1
            })
  }
// scroll to skills component//
  const redirectToSkills = () => {
    hideResponsiveNavBar();
    reStartGame()
    console.log(window.location)
    if(window.location.href === 'http://localhost:3000/home'){
        dispatch({
                  type: 'SCROLL_VIEW',
                  payload: 2
              })
    } else {
         dispatch({
                  type: 'SCROLL_VIEW',
                  payload: 2
              })
        setTimeout(() => {
          dispatch({
                  type: 'SCROLL_VIEW',
                  payload: 2
              })
      }, 330);
    }
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
                  <div className="link-one" onClick={showDropdown}>          
                      <Link className="link-nav home-link" to="/home" onClick={reStartGame}>Home <BiDownArrow className="dropdown-arrow"/></Link>
                      <ul ref={dropdown} class="dropdown">
                        <li><Link to="/home" className="dropdown-links" onClick={redirectToAbout}>About</Link></li>
                        <li><Link to="/home" className="dropdown-links" onClick={redirectToSkills}>Skills</Link></li>
                        <li><Link to="/home" className="dropdown-links">Illustration</Link></li>
                      </ul>
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
