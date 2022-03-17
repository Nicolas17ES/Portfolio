
import {Link} from 'react-router-dom'
import {FaHamburger, FaBars, FaTimes, FaDog} from 'react-icons/fa'
import {useRef} from 'react'
import './NavBar.css'

 


function NavBar() {

const navRef = useRef();
const divisor = useRef();
const showNavbar= () => {
  navRef.current.classList.toggle("responsive_nav")
  divisor.current.classList.toggle("lower_elements")
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
           <Link to="/notfound">Home</Link>
           <Link to="/notfound">Projects</Link>
           <Link to="/notfound">Games</Link>
           <Link to="/notfound">About</Link>

         </nav>
         <button className="nav-btn burger" onClick={showNavbar}>
           <FaHamburger size={24}/>
         </button>
       </header>
       <div className="divisor" ref={divisor}>Hey</div>
      </>

       
    )
}

export default NavBar
