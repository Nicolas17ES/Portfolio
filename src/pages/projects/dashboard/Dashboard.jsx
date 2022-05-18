import './Dashboard.css'

import {useContext, useEffect, useRef} from 'react'

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
            } else if(scroll === "dashboard" || window.location.href === 'http://localhost:3000/projects/dashboard'){
                scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
                dispatch({
                        type: 'SCROLL_VIEW',
                        payload: false
                    })
            }

        }, [scroll, dispatch])
        

    return (
        <div className="dashboard-page">
            <span ref={scrollTo} className="top-absolute"></span>
            <TopDashboard/>
            <BottomDashboard/>
        </div>
    )
}

export default Dashboard
