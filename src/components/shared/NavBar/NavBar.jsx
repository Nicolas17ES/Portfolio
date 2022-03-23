
import {Link} from 'react-router-dom'
import {FaHamburger, FaBars, FaTimes, FaDog} from 'react-icons/fa'
import {useRef} from 'react'
import './NavBar.css'

import { useContext } from 'react'
import FeedbackContext from '../../../context/feedback/FeedbackContext'


function NavBar({containerRef}) {
const {blurry, dispatch} = useContext(FeedbackContext);

const navRef = useRef();
const divisor = useRef();
const showNavbar= () => {
  console.log(blurry)
  navRef.current.classList.toggle("responsive_nav")
  dispatch({
    type: 'BLURRY_BACKGROUND',
    payload: !blurry
  })
  
  
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
           <Link to="/home">Home</Link>
           <Link to="/notfound">Projects</Link>
           <Link to="/rock">Games</Link>
           <Link to="/feedback">Feedback</Link>
           <Link to="/notfound">About</Link>


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
