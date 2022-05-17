import './Dashboard.css'

import {useContext, useEffect, useRef} from 'react'

import TopDashboard from '../../../components/projects/dashboard/top-dashboard/TopDashboard'
import BottomDashboard from '../../../components/projects/dashboard/bottom-dashboard/dashb-card/DashCard'
import FeedbackContext from '../../../context/feedback/FeedbackContext'

function Dashboard() {
        const {scroll, dispatch} = useContext(FeedbackContext);
        const scrollTo = useRef();
        console.log(window.location.href)

        // scroll till this point//
        useEffect(() => {
            if(scroll === "dashboard"){
                scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
                dispatch({
                        type: 'SCROLL_VIEW',
                        payload: false
                    })
            }

        }, [scroll])

    return (
        <div className="dashboard-page">
            <TopDashboard/>
            <BottomDashboard/>
        </div>
    )
}

export default Dashboard
