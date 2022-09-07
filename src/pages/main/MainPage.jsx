import Home from '../../components/main-page/home/Home'
import About from '../../components/main-page/about/About'
import Skills from '../../components/main-page/skills/Skills'
import Footer from '../../components/main-page/footer/Footer'
import {motion} from 'framer-motion'
import './LandingPage.css'



function MainPage() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .4, delay: .1}}
            exit={{opacity: 0, transition: {duration: .2}}}
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
