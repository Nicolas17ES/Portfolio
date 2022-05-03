import './Home.css'
import portrait from '../../assets/fluid16.png'
import {FcContacts} from 'react-icons/fc'
import { useContext} from 'react'
import { Link} from 'react-router-dom'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import {scrollToComponent} from '../../../context/feedback/FeedBackActions'
import ScrollButton from '../../shared/scroll-button/ScrollButton'
import TrailLine from '../../shared/trail-line/TrailLine'

function Home() {
    const {dispatch, scroll} = useContext(FeedbackContext);
    const executeScroll = () => {
        dispatch({
                    type: 'SCROLL_VIEW',
                    payload: 1
                })
    }
    return (
        
        <div className="home-page">
            <section className="section-one">
                <div className="cabezera-left">
                    <p className="hello-text">Hello!</p>
                    
                    <h1 className="name">I'm <span className="nicolas">Nicolas</span></h1>
                    <p className="intro-text">And I am a Full Stack Web Developer focused on JavaScript. veniam minima qui vel vitae tempora est officiis ut fugit bswk kskhn hdhiwhi.</p>
                  <Link to="/contact"><button className="contact-button"><p>CONTACT</p><FcContacts size={25} className="contact-icon"/></button></Link>
                </div>
                <div className="cabezera-rigth">
                   <img className="image-portrait" src={portrait} alt=""/>
                </div>
                <div onClick={executeScroll}>
                    <ScrollButton />
                    <TrailLine/>
                </div>
                
            </section>
        </div>
    )
}

export default Home
