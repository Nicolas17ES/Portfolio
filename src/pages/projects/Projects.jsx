import './Projects.css'
import {ReactComponent as Android } from '../../components/assets/skills/android.svg'
import {ReactComponent as Java } from '../../components/assets/skills/java.svg'
import {AiFillPlusCircle} from 'react-icons/ai'


function Projects() {
    return (
        <div className="projects-page">
            <div className="project">
                <div className="project-card">
                    <h3 className="project-title">FOUNDIT</h3>
                    <p className="project-subtitle">Mobile App created with Android Studio and Java focused on finding lost animals.</p>
                    <div className="about-and-icos">
                        <div className="project-about">
                            <span className="punto"></span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo beatae, fugiat, vitae temporibus eligendi similique sapiente omnis ea molestias nemo vel, a molestiae consectetur autem.
                        </div>
                        <div className="lang-fram">
                            <section className="project-top java">
                                {/* <h4 className="project-title-low">LANGUAGES</h4> */}
                                <Java className="project-icon"/>
                                <span className="languages">JAVA</span>
                            </section>
                            <section className="project-top">
                                {/* <h4 className="project-title-low">FRAMEWORKS</h4> */}
                                <Android className="project-icon"/>
                                <span className="languages">ANDROID STUDIO</span>                      
                            </section>
                        </div>
                    </div>
                    <div className="project-wave">
                        <svg className="project-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                        <AiFillPlusCircle className="plus-icon-projects" size={28}/>
                    </div>
                </div>

            </div>
            <div className="project">
                <div className="project-card">
                    Found It Web Version
                </div>
            </div>
        </div>
    )
}

export default Projects
