import './Home.css'
import portrait from '../../assets/fluid16.png'
import {FcContacts} from 'react-icons/fc'
import { useContext} from 'react'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import {scrollToComponent} from '../../../context/feedback/FeedBackActions'

function Home() {
    const {dispatch} = useContext(FeedbackContext);
    const executeScroll = () => {
        const payload = scrollToComponent();
        dispatch({
                    type: 'SCROLL_VIEW',
                    payload: payload
                })
    }
    return (
        
        <div className="home-page">
            <section className="section-one">
                <div className="cabezera-left">
                    <p className="hello-text">Hello!</p>
                    
                    <h1 className="name">I'm Nicolas</h1>
                    <p className="intro-text">And I am a Full Stack Web Developer focused on JavaScript. veniam minima qui vel vitae tempora est officiis ut fugit bswk kskhn hdhiwhi.</p>
                    <button className="contact-button"><p>CONTACT</p><FcContacts size={25} className="contact-icon"/></button>
                </div>
                <div className="cabezera-rigth">
                   <img className="image-portrait" src={portrait} alt=""/>
                </div>
                <div onClick={executeScroll} class="center-con">
                    <div class="round">
                        <span className="button-lines"></span>
                        <span className="button-lines"></span>
                        <span className="button-lines"></span>
                        <span className="button-lines"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
