import './Dashboard.css'

import {useContext, useEffect, useRef} from 'react'
import {motion} from 'framer-motion'

import TopDashboard from '../../../components/projects/dashboard/top-dashboard/TopDashboard'
import BottomDashboard from '../../../components/projects/dashboard/bottom-dashboard/dashb-card/DashCard'
import FeedbackContext from '../../../context/feedback/FeedbackContext'

function Dashboard() {
        const {scroll, dispatch} = useContext(FeedbackContext);
        const scrollTo = useRef();

        // scroll till this point//
        useEffect(() => {
            if(scroll === 'DASH_GALLERY' || scroll === false){
                return null
            } else if(scroll === "dashboard" || window.location.href === 'https://www.nicolas-luque.com/projects/dashboard'){
                scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
                dispatch({
                        type: 'SCROLL_VIEW',
                        payload: false
                    })
            }

        }, [scroll, dispatch])
        

    return (
        
        <motion.div 
            className="dashboard-page"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .2}}
            exit={{opacity: 0, transition: {duration: .1}}} 
        >
            <span ref={scrollTo} className="top-absolute"></span>
            <TopDashboard/>
            <BottomDashboard/>
        </motion.div>
    )
}

export default Dashboard
