import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Skills.css'

import {ReactComponent as Arrow } from '../../assets/skills/arrow.svg'

import SkillsTable from './SkillsTable'
import {useContext, useEffect, useRef} from 'react'

import FeedbackContext from '../../../context/feedback/FeedbackContext'
import ScrollButton from '../../shared/scroll-button/ScrollButton2'
import TrailLine from '../../shared/trail-line/TrailLine'

function Skills() {
    const {scroll, dispatch, hasAnimated} = useContext(FeedbackContext);
    const scrollTo = useRef();

    const [reference, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    })
      // scroll to next component//
    const executeScroll = () => {
        dispatch({
                type: 'SCROLL_VIEW',
                payload: "basement"
            })
    }

    // scroll till this point//
    useEffect(() => {
        if(scroll === 2){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }

    }, [scroll])

    if(hasAnimated === true){
        return (
            <div ref={reference} className="skills-page" id="skillsId">
                <>
                <div className="skills-left">
                    <div className="top-skill">
                        <h3 className="skills-title">SKILLS</h3>
                    </div>
                    <span ref={scrollTo} className="center-absolute"></span>
                    <div className="bottom-skill">
                        <p className="skills-text">Lorem ipsum dolor sit amet consectetur djwknd ti error incidunt ea fugiat unde, maiores, necessitatibus nemo velit hola casa coche perro comida animales zanahoria cucaracha hahah ole ole mas texto.</p>
                        <span className="skills-arrow"><Arrow className="arrow-svg"/></span>
                    </div>
                </div>
                <SkillsTable/>
                    <div className="scrolling-test" onClick={executeScroll}> 
                        <ScrollButton className="button-skills"/> 
                    </div>
                </>
            </div>
        )
    } else {
        return (
            <div ref={reference} className="skills-page" id="skillsId">
                {inView ? (
                    <>
                    <div className="skills-left">
                        <div className="top-skill">
                            <h3 className="skills-title">SKILLS</h3>
                        </div>
                        <span ref={scrollTo} className="center-absolute"></span>
                        <div className="bottom-skill">
                            <p className="skills-text">Lorem ipsum dolor sit amet consectetur djwknd ti error incidunt ea fugiat unde, maiores, necessitatibus nemo velit hola casa coche perro comida animales zanahoria cucaracha hahah ole ole mas texto.</p>
                            <span className="skills-arrow"><Arrow className="arrow-svg"/></span>
                        </div>
                        </div>
                    <SkillsTable/>
                    <div className="scrolling-test" onClick={executeScroll}> 
                        <ScrollButton className="button-skills"/>  
                        
                    </div>
                    </>
                ): (
                
                    <div ref={scrollTo} className="work-around-skills"></div>
                    
            )}
                
            </div>
        )
    }
}

export default Skills
