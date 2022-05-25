import './Projects.css'
import ProjectCard from '../../components/projects/project-cards/Card'
import {ReactComponent as Android } from '../../components/assets/skills/android.svg'
import {ReactComponent as Java } from '../../components/assets/skills/java.svg'
import {ReactComponent as Node } from '../../components/assets/skills/node.svg'
import {ReactComponent as Mysql } from '../../components/assets/skills/mysql.svg'
import {ReactComponent as React } from '../../components/assets/skills/react.svg'
import {ReactComponent as Tailwind } from '../../components/assets/skills/tailwind.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

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
        title: <h3 className="project-title">FOUNDIT</h3>,
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
        title: <h3 className="project-title-dashboard">DASHBRD</h3>,
        subtitle: "Web Application created with REACT and NODEJS.",
        about: "DASHBRD is like if the infamous Inspector Gadget suddenly turned into a Web Application. The idea behind this project was to work with as many APIs as possible to completely understand the fundamentals behind state management in REACT.",
    }
    
    return (
        <div className="projects-page">
            <Carousel 
            className="carousel" 
            showArrows={true} 
            showStatus={false}
            useKeyboardArrows={true} 
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const defStyle = { margin: 15, color: "white", cursor: "pointer" };
                    const style = isSelected
                    ? { ...defStyle, color: "#f57e7e" }
                    : { ...defStyle };
                    return (
                    <span
                        style={style}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                    >
                        {index}
                    </span>
                    );
                }}
            >
                <Link to="/projects/foundit">
                    <div className="project" onClick={redirectToFound} >
                        <span ref={scrollTo} className="top-absolute"></span>
                        <ProjectCard founditApp={founditApp}/>
                    </div>
                </Link>
                <Link to="/projects/dashboard">
                    <div className="project" onClick={redirectToDash} >
                        <ProjectCard founditApp={dashboardApp}/>
                    </div>
                </Link>
            </Carousel>
        </div>
    )
}

export default Projects
