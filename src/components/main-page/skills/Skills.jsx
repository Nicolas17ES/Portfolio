import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Skills.css'

import {ReactComponent as Arrow } from '../../assets/skills/arrow.svg'

import SkillsTable from './SkillsTable'
import {useContext, useEffect, useRef} from 'react'

import FeedbackContext from '../../../context/feedback/FeedbackContext'

function Skills() {
    const {scroll, dispatch} = useContext(FeedbackContext);
    const scrollTo = useRef();

    const [reference, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    })

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

    return (
        <div ref={reference} className="skills-page">
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
                </>
            ): (
              
                <div ref={scrollTo} className="work-around"></div>
                
           )}
            
        </div>
    )
}

export default Skills
