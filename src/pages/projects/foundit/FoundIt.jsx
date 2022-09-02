import './FoundIt.css'

import {useContext, useEffect, useRef} from 'react'
import {motion} from 'framer-motion'


import CardMobile from '../../../components/projects/foundIt/foundIt-cards/FoundCard'
import ProjectIntro from '../../../components/projects/foundIt/foundit-intro/Intro'
import FeedbackContext from '../../../context/feedback/FeedbackContext'

function FoundIt() {
        const {scroll, dispatch} = useContext(FeedbackContext);
        const scrollTo = useRef();

        // scroll till this point//
        useEffect(() => {
            if(scroll === "foundit" || window.location.href === 'https://www.nicolas-luque.com/projects/foundit'){
                scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
                dispatch({
                        type: 'SCROLL_VIEW',
                        payload: false
                    })
            }

        }, [scroll, dispatch])

    return (
         <motion.div
            className="foundit-page"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .2, delay: .1}}
            exit={{opacity: 0, transition: {duration: .1}}} 
        >
            <span ref={scrollTo} className="top-absolute"></span>
            <ProjectIntro/>
            <CardMobile/>
        </motion.div>
    )
}

export default FoundIt
