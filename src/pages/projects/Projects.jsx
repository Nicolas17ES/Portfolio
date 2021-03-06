import './Projects.css'
import ProjectCard from '../../components/projects/project-cards/Card'
import ProjectTittle from '../../components/games/game-title/GameTitle'
import {ReactComponent as Android } from '../../components/assets/skills/android.svg'
import {ReactComponent as Java } from '../../components/assets/skills/java.svg'
import {ReactComponent as Node } from '../../components/assets/skills/node.svg'
import {ReactComponent as Mysql } from '../../components/assets/skills/mysql.svg'
import {ReactComponent as React } from '../../components/assets/skills/react.svg'
import {ReactComponent as Tailwind } from '../../components/assets/skills/tailwind.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


import {useContext, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

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

    }, [scroll, dispatch])

    const redirectToDash = () => {
        dispatch({
                    type: 'SCROLL_VIEW',
                    payload: 'dashboard'
                })
    }
    const redirectToFound = () => {
        dispatch({
                    type: 'SCROLL_VIEW',
                    payload: 'foundit'
                })
    }

    const founditApp = {
        logo1: <Java className="project-icon"/>,
        logo1Name: "JAVA",
        logo2: <Android className="project-icon"/>,
        logo2Name: "ANDROID STU",
        logo3: <Node className="project-icon"/>,
        logo3Name: "NODEJS",
        logo4: <Mysql className="project-icon mysql-icon"/>,
        logo4Name: "MYSQL",
        title: <h2 className="project-title"><p>FOUNDIT</p></h2>,
        subtitle: "Mobile App created with Android Studio, Java and NodeJS.",
        about: "The main objective behind the project is to create a community where users will be able to help each other when their pet gets lost. Moreover, users will be able to find Animal Walkers close to their location who are willing to take care of their pet. ",
    }
    const dashboardApp = {
        logo1: <React className="project-icon"/>,
        logo1Name: "REACT",
        logo2: <Node className="project-icon"/>,
        logo2Name: "NODEJS",
        logo3: <Mysql className="project-icon mysql-icon"/>,
        logo3Name: "MYSQL",
        logo4: <Tailwind className="project-icon"/>,
        logo4Name: "TAILWIND",
        title: <h2 className="project-title"><p>DASHBRD</p></h2>,
        subtitle: "Web Application created with REACT and NODEJS.",
        about: "DASHBRD is like if the infamous Inspector Gadget suddenly turned into a Web Application. The idea behind this project was to work with as many APIs as possible to completely understand the fundamentals behind state management in REACT.",
    }
    
    return (
        <div className="full-projects">
            <ProjectTittle title={"PROJECTS"}/>
            <span ref={scrollTo} className="top-absolute"></span>
            <div className="projects-page">
                <Link to="/projects/foundit">
                    <div onClick={redirectToFound} >
                        <ProjectCard founditApp={founditApp}/>
                    </div>
                </Link>
                
                <Link to="/projects/dashboard">
                    <div onClick={redirectToDash} >
                        <ProjectCard founditApp={dashboardApp}/>
                    </div>
                </Link>
            </div>
        </div>

     
    )
}

export default Projects
