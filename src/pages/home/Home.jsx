import './Home.css'
import portrait from '../../components/assets/fluid16.png'
import {FcContacts} from 'react-icons/fc'

function Home() {
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
                
            </section>
            <p>hdhd</p>
        </div>
    )
}

export default Home
