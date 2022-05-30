import './Home.css'
import portrait from '../../assets/fluid16.png'
import {FcContacts} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import { useContext, useEffect, useRef} from 'react'
import { Link} from 'react-router-dom'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import ScrollButton from '../../shared/scroll-button/ScrollButton2'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';


function Home() {

    const {dispatch, scroll, hasAnimated} = useContext(FeedbackContext);
    const scrollTo = useRef();

    const [reference, inView] = useInView({
        threshold: 0.5,
    })
    const animation = useAnimation();


    useEffect(() => {
        if(scroll === 0){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }

    }, [scroll, dispatch]);

   useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 1.5,
                    delay: 0.1,
                    
                }
            })
        } else if (!inView){
            animation.start({ opacity: 0})
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);


    const executeScroll = () => {
        dispatch({
                    type: 'SCROLL_VIEW',
                    payload: 1
                })
    }

    if (hasAnimated === true){
        return ( 
            <div className="home-page">
                <span ref={scrollTo} className="top-absolute"></span>
                <section className="section-one">
                    <div className="cabezera-left">
                        <p className="hello-text">Hello!</p>
                        
                        <h1 className="name">I'm <span className="nicolas">Nicolas</span></h1>
                        <p className="intro-text">I am a Full Stack Web Developer and this is how I acquired the knowledge and patience to turn designs into dynamic websites.</p>
                    <div className="buttons-home">
                        <Link to="/contact"><button className="contact-button"><p>CONTACT</p><FcContacts size={25} className="contact-icon"/></button></Link>
                        <a href="https://github.com/Nicolas17ES" rel="noreferrer" target="_blank"><button className="contact-button"><p>GITHUB</p><AiFillGithub size={25} className="contact-icon-git"/></button></a>
                    </div>
                    </div>
                    <div className="cabezera-rigth">
                    <img className="image-portrait" src={portrait} alt=""/>
                    </div>
                    <div className="scroll-button-container" onClick={executeScroll}>
                        <ScrollButton/>
                    </div>
                    
                </section>
            </div>
        )
    } else {
        return (
            <div ref={reference} className="home-page">
                <span ref={scrollTo} className="top-absolute"></span>
                <section className="section-one">
                    <motion.div animate={animation} className="cabezera-left">
                        <p className="hello-text">Hello!</p>
                        
                        <h1 className="name">I'm <span className="nicolas">Nicolas</span></h1>
                        <p className="intro-text">I am a Full Stack Web Developer and this is how I acquired the knowledge and patience to turn designs into dynamic websites.</p>
                        <div className="buttons-home">
                            <Link to="/contact"><button className="contact-button"><p>CONTACT</p><FcContacts size={25} className="contact-icon"/></button></Link>
                            <a href="https://github.com/Nicolas17ES" rel="noreferrer" target="_blank"><button className="contact-button"><p>GITHUB</p><AiFillGithub size={25} className="contact-icon-git"/></button></a>
                        </div>
                    </motion.div>
                    <motion.div animate={animation} className="cabezera-rigth">
                        <img className="image-portrait" src={portrait} alt=""/>
                    </motion.div>
                    <div onClick={executeScroll}>
                        <ScrollButton />
                    </div>
                    
                </section>
            </div>
        )
    }

}

export default Home
