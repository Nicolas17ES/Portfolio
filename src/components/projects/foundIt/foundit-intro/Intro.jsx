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
        data: <> <li><strong className="strong">Motivations :</strong> I have always had a personal interest in gaining a better understandement of the world of Mobile App Development. So I decided to embark myself in a new project based on another  one of my  own motivations, animals.</li>
                </>
    }
    const block2 = {
        data: <>
                <li>My home country, Spain, is still a moderately <strong className="strong">animal friendly</strong> country and there is ultimately 1 animal for every two households. </li></>
    }
    const block3 = {
        data: <>
                <li>The main objective of FoundIt is to create a <strong className="strong">community</strong> of people by regions who will <strong className="strong">help</strong>  one and other in solving this problem. See below how the App works and all its features.</li></>
    }
    return (
        <div className="project-intro">
                <ProjectTitle title={"FOUNDIT"}/>
                <div className="view-repo">
                    <button onClick={() => navigate(-1)} className="reposatory-button"><FaBackward size={25} className="repo-icon"/><span>GO BACK</span></button>
                    <a className="reposatory-link" href="https://github.com/Nicolas17ES/AndroidApp" rel="noreferrer" target="_blank"><button className="reposatory-button"><AiFillGithub size={25} className="repo-icon"/><span>VIEW CODE</span></button></a>
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
