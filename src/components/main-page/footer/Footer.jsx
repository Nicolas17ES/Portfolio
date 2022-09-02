import './Footer.css'

import { useContext, useRef, useEffect } from 'react'
import {Link} from 'react-router-dom'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import {BsWhatsapp} from 'react-icons/bs'
import {GiClick} from 'react-icons/gi'
import {motion, useAnimation} from 'framer-motion'
import FooterSvg from './FooterSvg'
import { useInView } from 'react-intersection-observer';




function Footer() {
    
    const {scroll, dispatch, hasAnimated} = useContext(FeedbackContext);
    const scrollTo = useRef();

    // scroll to center of component//
    useEffect(() => {
        if(scroll === "basement"){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scroll])

    const [reference, inView] = useInView()

    const animation = useAnimation();
    const animationRight = useAnimation();

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
            animationRight.start({
                 x: 0,
                opacity: 1,
                transition: {
                    type: "tween",
                    delay: 0.1,
                    duration: 0.9,
                },
            })
        } else if (!inView){
            animation.start({ opacity: 0})
            animationRight.start({x: "77vw", opacity: 0})
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, animation, animationRight]);

        // scroll to projects component top//
    const redirectToProjects = () => {
        dispatch({
                    type: 'SCROLL_VIEW',
                    payload: "projects"
                })
    }
    // scroll to feedback component top//
    const redirectToFeedback = () => {
        dispatch({
                    type: 'SCROLL_VIEW',
                    payload: "feedback"
                })
    }
    // scroll to contact component top//
    const redirectToContact = () => {
        dispatch({
                    type: 'SCROLL_VIEW',
                    payload: "contact"
                })
    }

     if(hasAnimated === true){
        return (
            <div className="footer-page" ref={reference}>
                {/* <h3 className="skills-title title-basement">BASEMENT</h3> */}
                <div className="full-footer">
                    <div className="footer-content">
                        <div className="top-footer">
                                <div className="footer-block">
                                    <h3 className="block-title"> <sub>view </sub>PROJECTS</h3>
                                    <Link to="/projects" onClick={redirectToProjects}>
                                        <FooterSvg/> 
                                    </Link>
                                </div>
                            
                                <div className="footer-block">
                                    <h3 className="block-title">CONTACT <sub>me</sub></h3>
                                    <Link to="/contact" onClick={redirectToContact}>
                                        <FooterSvg/> 
                                    </Link>
                                </div>
                                <div className="footer-block">
                                    <h3 className="block-title"><sub>give </sub>FEEDBACK</h3>
                                    <Link to="/feedback" onClick={redirectToFeedback}>
                                        <FooterSvg/>  
                                    </Link>
                                </div>
                        </div>
                        <div className="bottom-footer">
                            {/* <span  className="footer-hide"><p>Music is the highest philosophy :)</p></span>
                            <span className="footer-icons"><p>+34689060044</p><BsWhatsapp size={16}/></span>
                            <span className="footer-icons"><Link to={"/contact"}><p>Contact</p></Link></span>
                            <span><p>Made by Nicolas Luque</p></span>
                            <span><p>@2022 All rights reserved</p></span> */}
                        </div>
                    </div>
                </div>
                  <span ref={scrollTo} className="center-absolute-footer"></span>
            </div>
            )
    } else {
        return (
            <div ref={reference}>
                <motion.div animate={animation}  className="footer-page">
                    {/* <h3 className="skills-title title-basement">BASEMENT</h3> */}
                    <div className="full-footer">
                        <div className="footer-content">
                            <div className="top-footer">
                                <div className="footer-block">
                                    <h3 className="block-title"> <sub>view </sub>PROJECTS</h3>
                                    <Link to="/projects" onClick={redirectToProjects}>
                                        <FooterSvg/> 
                                    </Link>
                                </div>
                            
                                <div className="footer-block">
                                    <h3 className="block-title">CONTACT <sub>@@</sub></h3>
                                    <Link to="/contact" onClick={redirectToContact}>
                                        <FooterSvg/> 
                                    </Link>
                                </div>
                                <div className="footer-block">
                                    <h3 className="block-title"><sub>give </sub>FEEDBACK</h3>
                                    <Link to="/feedback" onClick={redirectToFeedback}>
                                        <FooterSvg/>  
                                    </Link>
                                </div>
                            </div>
                            <motion.div animate={animationRight} className="bottom-footer">
                                <span  className="footer-hide"><p>Music is the highest philosophy :)</p></span>
                                <span className="footer-icons"><p>+34689060044</p><BsWhatsapp size={16}/></span>
                                <span className="footer-icons"><Link to={"/contact"}><p>Contact</p></Link></span>
                                <span><p>Made by Nicolas Luque</p></span>
                                <span><p>@2022 All rights reserved</p></span>
                            </motion.div>
                        </div>
                    </div>
                        <span ref={scrollTo} className="center-absolute-footer"></span>
                </motion.div>
            </div>
             
            
        )
    }
}

export default Footer
