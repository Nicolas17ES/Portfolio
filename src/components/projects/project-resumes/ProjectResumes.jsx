import './ProjectResumes.css'

function ProjectResumes({about}) {
    return (
        <div className="project-about-main">
            <ul className="about-list">
                {about.data}
            </ul>
        </div>
    )
}

export default ProjectResumes
