import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutLink'


import {FeedbackProvider} from './context/FeedbackContext'



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