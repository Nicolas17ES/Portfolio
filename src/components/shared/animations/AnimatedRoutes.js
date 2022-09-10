import React from 'react'
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'

import {AnimatePresence} from 'framer-motion'


// import AboutPage from './pages/feedback/AboutPage'
import Feedback from "../../../pages/feedback/Feedback"
import NotFound from '../../../pages/NotFound'
import Main from '../../../pages/main/MainPage'
import Projects from '../../../pages/projects/Projects'
import FoundIt from '../../../pages/projects/foundit/FoundIt'
import Dashboard from '../../../pages/projects/dashboard/Dashboard'
import PaperScissors from '../../../pages/games/Paper'
import Games from '../../../pages/games/MainGames'
import Answers from '../../../pages/games/answers/Answers'
import Contact from '../../main-page/contact/Contact2'
import LoadingPage from '../../main-page/home/loader/Loader'

function AnimatedRoutes() {
    
    const location = useLocation();

    return (
        <div>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route 
                        path="/feedback"
                        element={<Feedback/>}
                    ></Route>
                
                    {/* <Route path="/about" element={<AboutPage/>}/> */}
                    <Route path='/*' element={<NotFound/>}/>
                    <Route path='/home'  element={<Main/>}/>
                    <Route path='/games/rock'  element={<PaperScissors/>}/>
                    <Route path='/games'  element={<Games/>}/>
                    <Route path='/games/answers'  element={<Answers/>}/>
                    <Route path='/contact'  element={<Contact/>}/>
                    <Route path='/projects'  element={<Projects/>}/>
                    <Route path='/projects/foundit'  element={<FoundIt/>}/>
                    <Route path='/projects/dashboard'  element={<Dashboard/>}/>
                    <Route path='/'  element={<LoadingPage/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes
