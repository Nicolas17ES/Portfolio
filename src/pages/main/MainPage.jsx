import Home from '../../components/main-page/home/Home'
import About from '../../components/main-page/about/About'
import Skills from '../../components/main-page/skills/Skills'
import Footer from '../../components/main-page/footer/Footer'
import {motion} from 'framer-motion'
import './LandingPage.css'



function MainPage() {
    return (
        <div
            
            className="main-page"
        >
            <Home/>
            <About/>
            <Skills/>
            <Footer/>            
        </div>
    )
}

export default MainPage
