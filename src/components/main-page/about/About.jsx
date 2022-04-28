import './About.css'
import { ReactComponent as Vinyl }  from '../../assets/vinyl.svg'
import { ReactComponent as Road }  from '../../assets/road.svg'
import { ReactComponent as Laptop }  from '../../assets/laptop.svg'
import {useRef, useContext, useEffect, useState} from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import { useInView } from 'react-intersection-observer';
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import ModalVinyl from './ModalVinyl'
import ScrollButton from '../../shared/scroll-button/ScrollButton2'




function About(props) {
    const {scroll, dispatch, showModal, modal, hasAnimated} = useContext(FeedbackContext);
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

    // show modal depending on lcick event

    const modalToShow = () => {
        if(modal === 1){return <ModalVinyl title={"Things I love"} body={"Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto."}/>}
        else if(modal === 2) {return <ModalVinyl title={"About me"} body={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de,"}/>}
        else if(modal === 3) {return <ModalVinyl title={"WHAT I DO"} body={"Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sic"}/>}
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

    }, [scroll])


          
 
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
            <div className="scroll-button-container" onClick={executeScroll}>
                <ScrollButton/>
            </div>
            </>
           ) : (
              
                <div ref={scrollTo} className="work-around"></div>
                
           )} 
        </div>
        
    )
    }
}

export default About
