import './Skills.css'

import React from 'react'
import { useInView } from 'react-intersection-observer';
import {motion, useAnimation} from 'framer-motion'

import SkillsTable from './SkillsTable'
import {useContext, useEffect, useRef} from 'react'

import FeedbackContext from '../../../context/feedback/FeedbackContext'
import ScrollButton from '../../shared/scroll-button/ScrollButton3'


function Skills() {
    const {scroll, dispatch, hasAnimated} = useContext(FeedbackContext);
    const scrollTo = useRef();

    const [reference, inView] = useInView()
    const animation = useAnimation();
    console.log(scroll)

    // scroll till this point//
    useEffect(() => {
        if(scroll === 2){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }

    }, [scroll, dispatch])

    // animation table//

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: .8,
                    delay: 0.2,
                    
                }
            })
        } else if (!inView){
            animation.start({ opacity: 0})
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, animation]);

      // scroll to next component//
    const executeScroll = () => {
        dispatch({
                type: 'SCROLL_VIEW',
                payload: "basement"
            })
    }

    

    if(hasAnimated === true){
        return (
            <div ref={reference} className="skills-page" id="skillsId">
                <>
                <span ref={scrollTo} className="center-absolute-skills"></span>
                <SkillsTable/>
                    <div className="scrolling-test" onClick={executeScroll}> 
                        <ScrollButton className="button-skills"/> 
                    </div>
                </>
            </div>
        )
    } else {
        return (
            <div ref={reference} >
                <motion.div animate={animation} className="skills-page" id="skillsId">
                    <span ref={scrollTo} className="center-absolute-skills"></span>
                    <SkillsTable/>
                    <div className="scrolling-test" onClick={executeScroll}> 
                        <ScrollButton/>  
                        
                    </div>
                </motion.div>
            </div>
        )
    }
}

export default Skills
