import './Projects.css'
import ProjectCard from '../../components/project-cards/Card'
import {ReactComponent as Android } from '../../components/assets/skills/android.svg'
import {ReactComponent as Java } from '../../components/assets/skills/java.svg'


function Projects() {

    const founditApp = {
        logo1: <Android className="project-icon"/>,
        logo1Name: "JAVA",
        logo2: <Java className="project-icon"/>,
        logo2Name: "ANDROID STUDIO",
        title: <h3 className="project-title">FOUNDIT</h3>,
        subtitle: "Mobile App created with Android Studio and Java focused on finding lost animals.",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo beatae, fugiat, vitae temporibus eligendi similique sapiente omnis ea molestias nemo vel, a molestiae consectetur autem.",
    }
    const founditWeb = {
        logo1: <Android className="project-icon"/>,
        logo1Name: "REACT",
        logo2: <Java className="project-icon"/>,
        logo2Name: "NODEJS",
        title: <h3 className="project-title-animals">ANIMALS</h3>,
        subtitle: "Web Application created with REACT and NODEJS based on finding lost animals.",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo beatae, fugiat, vitae temporibus eligendi similique sapiente omnis ea molestias nemo vel, a molestiae consectetur autem.",
    }
    return (
        <div className="projects-page">
            <div className="project">
                <ProjectCard founditApp={founditApp}/>
            </div>
            <div className="project">
                <ProjectCard founditApp={founditWeb}/>
            </div>
        </div>
    )
}

export default Projects
