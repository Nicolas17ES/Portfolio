import './Projects.css'
import ProjectCard from '../../components/project-cards/Card'
import {ReactComponent as Android } from '../../components/assets/skills/android.svg'
import {ReactComponent as Java } from '../../components/assets/skills/java.svg'
import {ReactComponent as Node } from '../../components/assets/skills/node.svg'
import {ReactComponent as Mysql } from '../../components/assets/skills/mysql.svg'
import {ReactComponent as React } from '../../components/assets/skills/react.svg'
import {ReactComponent as Tailwind } from '../../components/assets/skills/tailwind.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import {useContext, useEffect, useRef} from 'react'

import FeedbackContext from '../../context/feedback/FeedbackContext'


function Projects() {

    const {scroll, dispatch} = useContext(FeedbackContext);
    const scrollTo = useRef();

    // scroll till this point//
    useEffect(() => {
        if(scroll === "projects"){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }

    }, [scroll])

    const founditApp = {
        logo1: <Java className="project-icon"/>,
        logo1Name: "JAVA",
        logo2: <Android className="project-icon"/>,
        logo2Name: "ANDROID STU",
        logo3: <Node className="project-icon"/>,
        logo3Name: "NODEJS",
        logo4: <Mysql className="project-icon mysql-icon"/>,
        logo4Name: "MYSQL",
        title: <h3 className="project-title">FOUNDIT</h3>,
        subtitle: "Mobile App created with Android Studio and Java focused on finding lost animals.",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo beatae, lorem lore m lorem lorem lorem lorem lore lorem lorem fugiat, vitae temporibus eligendi similique sapiente omnis ea molestias nemo vel, a molestiae consectetur autem.",
    }
    const founditWeb = {
        logo1: <React className="project-icon"/>,
        logo1Name: "REACT",
        logo2: <Node className="project-icon"/>,
        logo2Name: "NODEJS",
        logo3: <Mysql className="project-icon mysql-icon"/>,
        logo3Name: "MYSQL",
        logo4: <Tailwind className="project-icon"/>,
        logo4Name: "TAILWIND",
        title: <h3 className="project-title-animals">ANIMALS</h3>,
        subtitle: "Web Application created with REACT and NODEJS based on finding lost animals.",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo beatae, fugiat, vitae temporibus eligendi similique sapiente omnis ea molestias nemo vel, a molestiae consectetur autem.",
    }
    
    return (
        <div className="projects-page">
            <Carousel className="carousel" showArrows={false} >
                <div className="project">
                    <span ref={scrollTo} className="top-absolute"></span>
                    <ProjectCard founditApp={founditApp}/>
                </div>
                <div className="project">
                    <ProjectCard founditApp={founditWeb}/>
                </div>
            </Carousel>
        </div>
    )
}

export default Projects
