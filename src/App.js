import Header from "./components/feedback/Header"
import FeedbackList from "./components/feedback/FeedbackList"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackStats from "./components/feedback/FeedbackStats"
import FeedbackForm from "./components/feedback/FeedbackForm"
import AboutPage from './pages/feedback/AboutPage'
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
                            path="/"
                            element={
                                <>
                                    <FeedbackForm/>
                                    <FeedbackStats />
                                    <FeedbackList/>
                                </>
                            }
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