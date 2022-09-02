import Home from '../../components/main-page/home/Home'
import About from '../../components/main-page/about/About'
import Skills from '../../components/main-page/skills/Skills'
import Footer from '../../components/main-page/footer/Footer'
import {motion} from 'framer-motion'
import './LandingPage.css'



function MainPage() {
    return (
        <motion.div
            initial={{width: "0%"}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition: {duration: 0.4}}}
            transition={{type: 'tween'}}
            className="main-page"
        >
            <Home/>
            <About/>
            <Skills/>
            <Footer/>
            
        </motion.div>
    )
}

export default MainPage
