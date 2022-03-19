import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import AboutPage from './pages/feedback/AboutPage'

import AboutIconLink from './components/feedback/AboutLink'
import NavBar from './components/shared/NavBar/NavBar'


import {FeedbackProvider} from './context/feedback/FeedbackContext'
import Feedback from "./pages/feedback/Feedback"
import NotFound from './pages/NotFound'
import LandingPage from './pages/main/LandingPage'




function App() {
  

    return (
        <Router>
            <FeedbackProvider>
                {window.location.pathname!== '/' && <NavBar/>}
                <div className="container">
                    <Routes>
                        <Route 
                            path="/feedback"
                            element={<Feedback/>}
                        ></Route>
                    
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path='/*' element={<NotFound/>}/>
                        <Route path='/'  element={<LandingPage/>}/>
                    </Routes>
                    {window.location.pathname!== '/' && <AboutIconLink/>}
                </div>
            </FeedbackProvider>
        </Router>
    )
}

export default App