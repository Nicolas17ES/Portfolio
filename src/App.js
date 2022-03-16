import Header from "./components/feedback/Header"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/feedback/AboutPage'
import QuestionOne from './components/feedback/QuestionOne'
import QuestionTwo from './components/feedback/QuestionTwo'
import AboutIconLink from './components/feedback/AboutLink'


import {FeedbackProvider} from './context/feedback/FeedbackContext'
import Feedback from "./pages/feedback/Feedback"



function App() {

    return (
        <Router>
            <FeedbackProvider>
                <Header />
                <div className="container">
                    <Routes>
                        <Route 
                            path="/feedback"
                            element={<Feedback/>}
                        ></Route>
                    
                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>
                    <AboutIconLink/>
                </div>
            </FeedbackProvider>
        </Router>
    )
}

export default App