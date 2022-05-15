import {Link, useNavigate} from 'react-router-dom'
import './Intro.css'
import ProjectTitle from '../../projectTitles/ProjectTitle'
import ProjectResume from '../../project-resumes/ProjectResumes'
import {AiFillGithub} from 'react-icons/ai'
import {FaBackward} from 'react-icons/fa'
import {FaForward} from 'react-icons/fa'

function Intro() {

    const navigate = useNavigate();

    const block1 = {
        data: <> <li>ad dolores non quidem velit amet nobis voluptatibus eveniet architecto odit accusantium enim eius nesciunt neque eos quas. Sunt, dolores amet.</li>
                <li>Lorem, unde laborum abusrd <strong className="strong">Lorem ipsum.</strong> eaque non quod praesentium, soluta, inventore vero vel exercitationem quos illo nemo quidem? Sit.</li>
                </>
    }
    const block2 = {
        data: <>
                <li>Lorem <strong className="strong">dolor sit amet lorem </strong>  ipsum beatae $19/month hola casa cocheipsam harum, sit, fuga totam quam a cumque provident voluptatibus illum facere.</li></>
    }
    const block3 = {
        data: <>
                <li>Lorem ipsum dolor sit amet aliquam corporis fuga  magni vero deserunt quasi quam et! Molestias accusantium dignissimos at ducimus voluptate odit minus <strong className="strong">Lore sit amet. </strong> fuga accusamus asperiores. A illo fugit magni?</li></>
    }
    return (
        <div className="project-intro">
                <ProjectTitle title={"FOUNDIT"}/>
                <div className="view-repo">
                    <button onClick={() => navigate(-1)} className="reposatory-button"><FaBackward size={25} className="repo-icon"/><span>GO BACK</span></button>
                    <a className="reposatory-link" href="https://github.com/Nicolas17ES/AndroidApp" target="_blank"><button className="reposatory-button"><AiFillGithub size={25} className="repo-icon"/><span>VIEW CODE</span></button></a>
                    <Link to={"/projects/dashboard"}><button className="reposatory-button"><FaForward size={25} className="repo-icon"/><span>NEXT WORK</span></button></Link>
                </div>
            <div className="about-blocks">
                <div className="block-left">
                    <div className="block-1">
                        <ProjectResume about={block1}/> 
                    </div>
                </div>
                <div className="block-right">
                    <div className="block-2">
                        <ProjectResume about={block2}/>
                    </div>
                    <div className="block-3">
                        <ProjectResume about={block3}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
