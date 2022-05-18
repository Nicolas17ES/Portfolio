import './Home.css'
import portrait from '../../assets/fluid16.png'
import {FcContacts} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import { useContext, useEffect, useRef} from 'react'
import { Link} from 'react-router-dom'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import ScrollButton from '../../shared/scroll-button/ScrollButton'


function Home() {

    const {dispatch, scroll} = useContext(FeedbackContext);
    const scrollTo = useRef();

    useEffect(() => {
        if(scroll === 0){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }

    }, [scroll, dispatch])


    const executeScroll = () => {
        dispatch({
                    type: 'SCROLL_VIEW',
                    payload: 1
                })
    }
    return (
        
        <div className="home-page">
            <span ref={scrollTo} className="top-absolute"></span>
            <section className="section-one">
                <div className="cabezera-left">
                    <p className="hello-text">Hello!</p>
                    
                    <h1 className="name">I'm <span className="nicolas">Nicolas</span></h1>
                    <p className="intro-text">And I am a Full Stack Web Developer focused on JavaScript. veniam minima qui vel vitae tempora est officiis ut fugit bswk kskhn hdhiwhi.</p>
                  <div className="buttons-home">
                    <Link to="/contact"><button className="contact-button"><p>CONTACT</p><FcContacts size={25} className="contact-icon"/></button></Link>
                    <a href="https://github.com/Nicolas17ES" rel="noreferrer" target="_blank"><button className="contact-button"><p>GITHUB</p><AiFillGithub size={25} className="contact-icon-git"/></button></a>
                  </div>
                </div>
                <div className="cabezera-rigth">
                   <img className="image-portrait" src={portrait} alt=""/>
                </div>
                <div onClick={executeScroll}>
                    <ScrollButton />
                </div>
                
            </section>
        </div>
    )
}

export default Home
