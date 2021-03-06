import './About.css'
import { ReactComponent as Vinyl }  from '../../assets/vinyl.svg'
import { ReactComponent as Road }  from '../../assets/road.svg'
import { ReactComponent as Laptop }  from '../../assets/laptop.svg'
import {useRef, useContext, useEffect} from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import { useInView } from 'react-intersection-observer';
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import ModalVinyl from './ModalVinyl'
import ScrollButton from '../../shared/scroll-button/ScrollButton2'
import {motion, useAnimation} from 'framer-motion'




function About(props) {

    const {scroll, dispatch, modal, hasAnimated} = useContext(FeedbackContext);
    const scrollTo = useRef();
    
    const [reference, inView] = useInView({
        threshold: 0.2,
    })
    const animation = useAnimation();

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

    const displayModalVinyl = () => {
        dispatch({
            type: "MODAL",
            payload: 1,
        })
        dispatch({
            type: "SHOW_MODAL",
            payload: true,
        })
    }
    const displayModalRoad = () => {
         dispatch({
            type: "MODAL",
            payload: 2,
        })
         dispatch({
            type: "SHOW_MODAL",
            payload: true,
        })
    }
    const displayModalLaptop = () => {
         dispatch({
            type: "MODAL",
            payload: 3,
        })
         dispatch({
            type: "SHOW_MODAL",
            payload: true,
        })
    }

    // blocks of data for each modal //
    const modalData = [
        {
            titleOne: "FRONT-END",
            bodyOne: "Implementing visual elements that users see and interact with in a web application using web languages such as HTML, CSS, and JavaScript has quickly become my main passion.",
            titleTwo: "BACK-END",
            bodyTwo: "NodeJs has become my favourite platform  for executing server-side code. I have also had the opportunity of working with other frameworks such as Laravel and NestJS.",
            titleThree: "UI/UX",
            bodyThree: "These past months I developed an interest in designing user interfaces via FIGMA, although I am still learning how to convert those same exact ideas into code I look forward to investing more time on this side of Web Development.",
        },
        
        {
            titleOne: "May 2020",
            bodyOne: "On May 2020 I started my journey as a Web Developer, I decided to make a change of careers and left the world of Events behind to enter the realm of coding.",
            titleTwo: "September 2021",
            bodyTwo: "After a long journey of self-teaching I started the Coding Academy at Epitech University. Where I was constantly challenged to create new projects and experiment with new languages and frameworks.",
            titleThree: "March 2022",
            bodyThree: "After finishing my masters I started building my own portfolio and some personal projects such as an Android Studio App and a React Dashboard.",
        },

        {
            titleOne: "EVENTS",
            bodyOne: "I have dedicated a great part of my past to designing and developing all kind of events, from Professional Congresses to Music Events.",
            titleTwo: "MUSIC",
            bodyTwo: "Music has always been my best ally. I collect records and I belong to different collectives where we curate our own music events.",
            titleThree: "SPORTS",
            bodyThree: "During my coding breaks I practice sports for my physical, health and mental refreshment.",
        },
    
    ]
    // blocks of data for each modal //

    // show modal depending on lcick event

    const modalToShow = () => {
        if(modal === 1){return <ModalVinyl data={modalData[0]}/>}
        else if(modal === 2) {return <ModalVinyl data={modalData[1]}/>}
        else if(modal === 3) {return <ModalVinyl data={modalData[2]}/>}
        else{ return null}
    }

    // scroll to next component//
    const executeScroll = () => {
        dispatch({
                type: 'SCROLL_VIEW',
                payload: 2
            })
    }


    
   

    useEffect(() => {
        if(scroll === 1){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center", offset: 10})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }

    }, [scroll, dispatch])


          
 
if(hasAnimated === true){
    return (
        <div  ref={reference} className="about-page">
               <>
               <section className="section-two">
                <div className="box1 box">ABOUT ME</div>
                <div className="box2 box"></div>
                <div onClick={e => e.stopPropagation()} className="box3 box">
                    <Vinyl className="vinyl about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalLaptop}>
                        <AiFillPlusCircle className="plus-icon" size={26}/>
                    </button>
                    <p>Besides coding and Design there are many other activities that awake an interest in me.</p> 
                    {modalToShow()}
                </div>
                <div className="box4 box">THINGS I LOVE </div>
                <div className="box5 box"></div>
                <div onClick={e => e.stopPropagation()} className="box6 box">
                    <Road className="road about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalRoad}>
                        <AiFillPlusCircle className="plus-icon" size={24}/>
                    </button>
                    <p ref={scrollTo}>Follow the path and find out how I went from being a Professional Congress Organizer to a Web Developer.</p>
                    {modalToShow()}
                </div>
                <div className="box7 box">WHAT I DO</div>
                <div className="box8 box"></div>
                <div onClick={e => e.stopPropagation()} className="box9 box">
                    <Laptop className="laptop about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalVinyl}>
                        <AiFillPlusCircle className="plus-icon" size={24}/>
                    </button>
                    <p>In the last two years I learned how to transform ideas into real life projects. Let me show you how.</p>
                    {modalToShow()}  
                </div>
                <div className="box10 box"></div>
                <div className="box11 box"></div>
                <div className="box12 box"></div>
                <div className="box13 box"></div>
                <div className="box15 box"></div>
                <div className="box16 box"></div>
                <div className="box19 box"></div>
            </section>
            <div className="scroll-button-container" onClick={executeScroll}>
                <ScrollButton/>
            </div>
            </>
        </div>
    )
} else {
    return (
       <div  ref={reference} className="about-page">
               <motion.div animate={animation}  className="section-two">
                    <div className="box1 box">ABOUT ME</div>
                <div className="box2 box"></div>
                <div onClick={e => e.stopPropagation()} className="box3 box">
                    <Vinyl className="vinyl about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalLaptop}>
                        <AiFillPlusCircle className="plus-icon" size={26}/>
                    </button>
                    <p>Besides coding and Design there are many other activities that awake an interest in me.</p> 
                    {modalToShow()}
                </div>
                <div className="box4 box">THINGS I LOVE </div>
                <div className="box5 box"></div>
                <div onClick={e => e.stopPropagation()} className="box6 box">
                    <Road className="road about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalRoad}>
                        <AiFillPlusCircle className="plus-icon" size={24}/>
                    </button>
                    <p ref={scrollTo}>Follow the path and find out how I went from being a Professional Congress Organizer to a Web Developer.</p>
                    {modalToShow()}
                </div>
                <div className="box7 box">WHAT I DO</div>
                <div className="box8 box"></div>
                <div onClick={e => e.stopPropagation()} className="box9 box">
                    <Laptop className="laptop about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalVinyl}>
                        <AiFillPlusCircle className="plus-icon" size={24}/>
                    </button>
                    <p>In the last two years I learned how to transform ideas into real life projects. Let me show you how.</p>
                    {modalToShow()}  
                </div>
                <div className="box10 box"></div>
                <div className="box11 box"></div>
                <div className="box12 box"></div>
                <div className="box13 box"></div>
                <div className="box15 box"></div>
                <div className="box16 box"></div>
                <div className="box19 box"></div>
            </motion.div>
            <div className="scroll-button-container"  onClick={executeScroll}>
                    <ScrollButton />
            </div>
        </div>
        
    )
    }
}

export default About
