import './Home.css'
import portrait from '../../assets/fluid16.png'
import {FcContacts} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import { useState, useContext, useEffect, useRef} from 'react'
import { Link} from 'react-router-dom'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import ScrollButton from '../../shared/scroll-button/ScrollButton'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import HomeSvg from './HomeSvg2'
import Loader from './loader/Loader'



function Home() {

    // CURSOR
    // const [mousePosition, setMousePosition] = useState({
    //     x: 0,
    //     y: 0
    // });
    // const [cursorVariant, setCursorVariant] = useState("default");


    // useEffect(() => {
    //     const mouseMove = e => {
    //     setMousePosition({
    //         x: e.clientX,
    //         y: e.clientY
    //     })
    //     }

    //     window.addEventListener("mousemove", mouseMove);

    //     return () => {
    //     window.removeEventListener("mousemove", mouseMove);
    //     }
    // }, []);

    // const variants = {
    //     default: {
    //         x: mousePosition.x - 16,
    //         y: mousePosition.y - 16,
    //         },
    //     text: {
    //         height: 100,
    //         width: 100,
    //         x: mousePosition.x - 75,
    //         y: mousePosition.y - 75,
    //         backgroundColor: "#f57e7e",
    //         mixBlendMode: "difference"
    //     }
    // }

    // const textEnter = () => setCursorVariant("text");
    // const textLeave = () => setCursorVariant("default");

    // CURSOR

    const {dispatch, scroll, hasAnimated} = useContext(FeedbackContext);
    const scrollTo = useRef();

    const [reference, inView] = useInView()
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
                    duration: .4,
                    delay: 0.1,
                    
                }
            })
        } else if (!inView){
            animation.start({ opacity: 0})
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animation, inView]);


    const executeScroll = () => {
        dispatch({
                    type: 'SCROLL_VIEW',
                    payload: 1
                })
    }

  
    if(hasAnimated === true){
        return (
            <div ref={reference}>
                <div className="home-page-one">
                <span ref={scrollTo} className="top-absolute"></span>
                <div 
                    className="welcome-figure"
                    
                >
                    <div  class="inner-welcome">
                        <span >Hi I'm bla bla,</span>
                        <span  className="span-margin">a Bla Blu BU</span>                  
                    </div>
                    <div class="inner-welcome">
                        <span >Hi I'm bla bla,</span>
                        <span  className="span-margin">a Bla Blu BU</span>
                    </div>
                </div>
                <div className="home-figures">
                    <motion.div  className="svg-one">
                        <HomeSvg/>
                    </motion.div>
         
                    <motion.div  
                        className="between-svgs"
                        initial={{opacity: 0, y: "300px"}}
                        animate={{opacity: 1, y:0}}
                        transition={{duration: 1.1, delay: 1}}
                    
                    >
                        <motion.p whileHover={{scale: 1.2}} transition={{type: 'spring', duration: .7}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit at impedit doloribus itaque nobis reiciendis magnam iure animi omnis. Lorem ipsum dolor.</motion.p>
                    </motion.div>
                    <motion.div drag className="svg-two" >
                        <HomeSvg/>
                    </motion.div>
                </div>
                <motion.div 
                    onClick={executeScroll}
                    initial={{opacity: 0, y: "300px"}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration: 1.1, delay: 1}}
                >
                    <ScrollButton />
                </motion.div>
                {/* <motion.div
                    className='cursor'
                    variants={variants}
                    animate={cursorVariant}
                /> */}
            </div>
            </div>
            
        )
    
    } else {
    
        return (
            <div ref={reference}>
                <motion.div animate={animation} className="home-page-one">
                <span ref={scrollTo} className="top-absolute"></span>
                <div 
                    className="welcome-figure"
                    
                >
                    <div  class="inner-welcome">
                        <span >Hi I'm bla bla,</span>
                        <span  className="span-margin">a Bla Blu BU</span>                  
                    </div>
                    <div class="inner-welcome">
                        <span >Hi I'm bla bla,</span>
                        <span  className="span-margin">a Bla Blu BU</span>
                    </div>
                </div>
                <div className="home-figures">
                    <motion.div  className="svg-one">
                        <HomeSvg/>
                    </motion.div>
         
                    <motion.div  
                        className="between-svgs"
                        initial={{opacity: 0, y: "300px"}}
                        animate={{opacity: 1, y:0}}
                        transition={{duration: 1.1, delay: 1}}
                    
                    >
                        <motion.p whileHover={{scale: 1.2}} transition={{type: 'spring', duration: .7}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit at impedit doloribus itaque nobis reiciendis magnam iure animi omnis. Lorem ipsum dolor.</motion.p>
                    </motion.div>
                    <motion.div drag className="svg-two" >
                        <HomeSvg/>
                    </motion.div>
                </div>
                <motion.div 
                    onClick={executeScroll}
                    initial={{opacity: 0, y: "300px"}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration: 1.1, delay: 1}}
                >
                    <ScrollButton />
                </motion.div>
                {/* <motion.div
                    className='cursor'
                    variants={variants}
                    animate={cursorVariant}
                /> */}
            </motion.div>
            </div>
            
        )
    }

}

export default Home
