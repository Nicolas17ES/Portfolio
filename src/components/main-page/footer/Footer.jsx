import './Footer.css'

import { useContext, useRef, useEffect } from 'react'
import {Link} from 'react-router-dom'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import {BsWhatsapp, BsMailbox2} from 'react-icons/bs'
import {GiClick} from 'react-icons/gi'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"



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

    }, [scroll])

    const [reference, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    })

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
                <div className="full-footer">
                    <div className="footer-content">
                        <div className="top-footer">
                            <div className="footer-block">
                                <h3 className="block-title"> <sub>view my </sub>PROJECTS</h3>
                                <Link to="/projects" onClick={redirectToProjects}>
                                    <div className="circle-1">
                                        <div className="inner-circle-1">
                                            <GiClick className="click-mouse" size={24}/>
                                        </div>
                                </div>
                                </Link>
                            </div>
                            <div className="footer-block">
                                <h3 className="block-title">CONTACT <sub>me</sub></h3>
                                <Link to="/contact" onClick={redirectToContact}>
                                    <div className="circle-2">
                                        <div className="inner-circle-2">
                                            <GiClick className="click-mouse" size={24}/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="footer-block">
                                <h3 className="block-title"><sub>give me </sub>FEEDBACK</h3>
                                <Link to="/feedback" onClick={redirectToFeedback}>
                                    <div className="circle-3">
                                        <div className="inner-circle-3">
                                            <GiClick className="click-mouse" size={24}/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bottom-footer">
                            <span  className="footer-hide"><p>Music is the highest philosophy :)</p></span>
                            <span className="footer-icons"><p>WhatsApp</p><BsWhatsapp size={16}/></span>
                            <span className="footer-icons"><p>Email</p> <BsMailbox2 size={16}/></span>
                            <span><p>Made by Nicolas Luque</p></span>
                            <span><p>@2022 All rights reserved</p></span>
                        </div>
                    </div>
                </div>
                  <span ref={scrollTo} className="center-absolute"></span>
            </div>
            )
    } else {
        return (
             <div className="footer-page" ref={reference}>
                 {inView ? (
                    <>
                    <div className="full-footer">
                        <div className="footer-content">
                            <div className="top-footer">
                                <div className="footer-block">
                                    <h3 className="block-title"> <sub>view my </sub>PROJECTS</h3>
                                    <Link to="/projects" onClick={redirectToProjects}>
                                        <div className="circle-1">
                                            <div className="inner-circle-1">
                                                <GiClick className="click-mouse" size={24}/>
                                            </div>
                                    </div>
                                    </Link>
                                </div>
                            
                                <div className="footer-block">
                                    <h3 className="block-title">CONTACT <sub>me</sub></h3>
                                    <Link to="/contact" onClick={redirectToContact}>
                                        <div className="circle-2">
                                            <div className="inner-circle-2">
                                                <GiClick className="click-mouse" size={24}/>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="footer-block">
                                    <h3 className="block-title"><sub>give me </sub>FEEDBACK</h3>
                                    <Link to="/feedback" onClick={redirectToFeedback}>
                                        <div className="circle-3">
                                            <div className="inner-circle-3">
                                                <GiClick className="click-mouse" size={24}/>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="bottom-footer">
                                <span  className="footer-hide"><p>Music is the highest philosophy :)</p></span>
                                <span className="footer-icons"><p>WhatsApp</p><BsWhatsapp size={16}/></span>
                                <span className="footer-icons"><p>Email</p> <BsMailbox2 size={16}/></span>
                                <span><p>Made by Nicolas Luque</p></span>
                                <span><p>@2022 All rights reserved</p></span>
                            </div>
                        </div>
                    </div>
                        <span ref={scrollTo} className="center-absolute"></span>
                    </>
                ): (
                
                    <div ref={scrollTo} className="work-around-basement"></div>
                    
            )}
                
            </div>
            
        )
    }
}

export default Footer
