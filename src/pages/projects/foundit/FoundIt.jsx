import './FoundIt.css'

import {useContext, useEffect, useRef} from 'react'

import CardMobile from '../../../components/projects/foundIt/foundIt-cards/FoundCard'
import ProjectIntro from '../../../components/projects/foundIt/foundit-intro/Intro'
import FeedbackContext from '../../../context/feedback/FeedbackContext'

function FoundIt() {
        const {scroll, dispatch} = useContext(FeedbackContext);
        const scrollTo = useRef();

        // scroll till this point//
        useEffect(() => {
            if(scroll === "foundit" || window.location.href === 'http://localhost:3000/projects/foundit'){
                scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
                dispatch({
                        type: 'SCROLL_VIEW',
                        payload: false
                    })
            }

        }, [scroll, dispatch])

    return (
        <div className="foundit-page">
            <span ref={scrollTo} className="top-absolute"></span>
            <ProjectIntro/>
            <CardMobile/>
        </div>
    )
}

export default FoundIt
