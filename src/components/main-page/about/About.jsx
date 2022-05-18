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




function About(props) {
    const {scroll, dispatch, modal, hasAnimated} = useContext(FeedbackContext);
    const scrollTo = useRef();
    const [reference, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    })

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
            itleOne: "CODING",
            bodyOne: "sit amet consectetur adipisicing elit. Ipsum, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis?",
            titleTwo: "MUSIC",
            bodyTwo: "sit amet consectetur adipisicing elit. Ipsum, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis?",
            titleThree: "SPORTS",
            bodyThree: "sit amet consectetur adipisicing elit. Ipsum, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis?",
        },
        {
            titleOne: "4rd May 2020",
            bodyOne: "sit amet consectetur adipisicing elit. Ipsum, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis?",
            titleTwo: "5rd May 2020",
            bodyTwo: "sit amet consectetur adipisicing elit. Ipsum, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis?",
            titleThree: "6rd May 2020",
            bodyThree: "sit amet consectetur adipisicing elit. Ipsum, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis?",
        },
        {
            titleOne: "FRONT-END",
            bodyOne: "sit amet consectetur adipisicing elit. Ipsum, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis?",
            titleTwo: "BACK-END",
            bodyTwo: "sit amet consectetur adipisicing elit. Ipsum, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis?",
            titleThree: "UI/UX",
            bodyThree: "sit amet consectetur adipisicing elit. Ipsum, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis?",
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
                    <Laptop className="laptop about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalLaptop}>
                        <AiFillPlusCircle className="plus-icon" size={26}/>
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ashjkdh hola...</p> 
                    {modalToShow()}
                </div>
                <div className="box4 box">WHAT I DO</div>
                <div className="box5 box"></div>
                <div onClick={e => e.stopPropagation()} className="box6 box">
                    <Road className="road about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalRoad}>
                        <AiFillPlusCircle className="plus-icon" size={24}/>
                    </button>
                    <p ref={scrollTo}>Lorem ipsum dolor sit amet consectetur adipisicing elit ashjkdh hola casa...</p>
                    {modalToShow()}
                </div>
                <div className="box7 box">THINGS I LOVE</div>
                <div className="box8 box"></div>
                <div onClick={e => e.stopPropagation()} className="box9 box">
                    <Vinyl className="vinyl about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalVinyl}>
                        <AiFillPlusCircle className="plus-icon" size={24}/>
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ashjkdh hola casa...</p>
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
           {inView ? (
               <>
               <section className="section-two">
                <div className="box1 box">ABOUT ME</div>
                <div className="box2 box"></div>
                <div onClick={e => e.stopPropagation()} className="box3 box">
                    <Laptop className="laptop about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalLaptop}>
                        <AiFillPlusCircle className="plus-icon" size={24}/>
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ashjkdh hola...</p> 
                    {modalToShow()}
                </div>
                <div className="box4 box">WHAT I DO</div>
                <div className="box5 box"></div>
                <div onClick={e => e.stopPropagation()} className="box6 box">
                    <Road className="road about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalRoad}>
                        <AiFillPlusCircle className="plus-icon" size={24}/>
                    </button>
                    <p ref={scrollTo}>Lorem ipsum dolor sit amet consectetur adipisicing elit ashjkdh hola casa...</p>
                    {modalToShow()}
                </div>
                <div className="box7 box">THINGS I LOVE</div>
                <div className="box8 box"></div>
                <div onClick={e => e.stopPropagation()} className="box9 box">
                    <Vinyl className="vinyl about-svg"/>
                    <button className="plus-icon-button" onClick={displayModalVinyl}>
                        <AiFillPlusCircle className="plus-icon" size={24}/>
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ashjkdh hola casa...</p>
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
            {/* <div className="scroll-button-container" onClick={executeScroll}>
                <ScrollButton/>
            </div> */}
            <div className="scroll-button-container"  onClick={executeScroll}>
                    <ScrollButton />
                </div>
            </>
           ) : (
              
                <div ref={scrollTo} className="work-around-about"></div>
                
           )} 
        </div>
        
    )
    }
}

export default About
