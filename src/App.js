import Header from "./components/feedback/Header"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/feedback/AboutPage'
import QuestionOne from './pages/feedback/QuestionOne'
import QuestionTwo from './pages/feedback/QuestionTwo'
import AboutIconLink from './components/feedback/AboutLink'


import {FeedbackProvider} from './context/feedback/FeedbackContext'



function App() {

    return (
        <Router>
            <FeedbackProvider>
                <Header />
                <div className="container">
                    <Routes>
                        <Route 
                            path="/feedback/one"
                            element={<QuestionOne/>}
                        ></Route>
                        <Route 
                            path="/feedback/two"
                            element={<QuestionTwo/>}
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