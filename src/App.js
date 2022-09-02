import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'


import NavBar from './components/shared/NavBar/NavBar'
import Container from './components/shared/Container'
import AnimatedRoutes from './components/shared/animations/AnimatedRoutes'

import {FeedbackProvider} from './context/feedback/FeedbackContext'
import {GamesProvider} from './context/games/GamesContext'







function App() {  

    return (
        <Router>
            <FeedbackProvider>
                <GamesProvider>
                    {/* {window.location.pathname !== '/' && <NavBar/>} */}
                    <NavBar/>
                    <Container>
                        <div className="container">
                            <main>
                                <AnimatedRoutes/>
                            </main>
                        </div>
                    </Container>
                </GamesProvider>
            </FeedbackProvider>
        </Router>
    )
}

export default App