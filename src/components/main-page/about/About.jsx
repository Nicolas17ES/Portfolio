import './About.css'
import {AiFillPlusCircle} from 'react-icons/ai'
import {useRef, useContext, useEffect} from 'react'
import FeedbackContext from '../../../context/feedback/FeedbackContext'




function About() {

    const {scroll} = useContext(FeedbackContext);
    const scrollTo = useRef();

    useEffect(() => {
        
        if(scroll === true){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
        }

    }, [scroll])

    return (
        <div  className="about-page">
            <section className="section-two">
                <div className="box1 box">ABOUT ME</div>
                <div className="box2 box"></div>
                <div className="box3 box"><p>Started my Web Dev journey two years ago as a self-taught student. It quickly became a passion so...</p></div>
                <div className="box4 box">WHAT I DO</div>
                <div className="box5 box"></div>
                <div ref={scrollTo} className="box6 box"><p>Started my Web Dev journey two years ago as a self-taught student. It quickly became a passion so...</p><AiFillPlusCircle size={18} className="plus-icon"/></div>
                <div className="box7 box">THINGS I LOVE</div>
                <div className="box8 box"></div>
                <div className="box9 box"><p>I am obssesed with creating things, applying creativity and solving problems</p></div>
                <div className="box10 box"></div>
                <div className="box11 box"></div>
                <div className="box12 box"></div>
                <div className="box13 box"></div>
                <div className="box14 box"></div>
                <div className="box15 box"></div>
                <div className="box16 box"></div>
                <div className="box19 box"></div>
            </section>
        </div>
    )
}

export default About
