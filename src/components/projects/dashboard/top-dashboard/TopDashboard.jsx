import {Link, useNavigate} from 'react-router-dom'

import './TopDashboard.css'
import Service from '../services/Service'
import TextBlock from '../text-block/TextBlock'
import ProjectTitle from '../../projectTitles/ProjectTitle'

import {AiFillGithub} from 'react-icons/ai'
import {FaBackward} from 'react-icons/fa'
import {AiOutlineArrowDown} from 'react-icons/ai'


function TopDashboard() {

    const navigate = useNavigate();

    // blockd of data for services//
    const booking = {
        teal: "BOOKING APP",
        button: "Search Flights",
        image: "https://images.unsplash.com/photo-1621632361333-4649f0b59adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGZsaWdodHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    }

    const weather = {
        teal: "WEATHER APP",
        button: "Click for weather",
        image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    }

    const news = {
        teal: "NEWS APP",
        button: "Access to news",
        image: "https://images.unsplash.com/photo-1585812876834-2f24ff0aa95d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxuZXdzcGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    }
    // END blockd of data for services//

    // text for each block//

    const textOne = {
        text: "La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si desea contribuir al proyecto de ejemplos interactivos, clone y envíenos una solicitud de extracción (pull request).",
    }
    const textTwo = {
        text: "La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si desea contribuir al proyecto de ejemplos interactivos, clone  y envíenos una solicitud de extracción (pull request).",
    }
    const textThree = {
        text: "La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si desea contribuir al proyecto de ejemplos interactivos, clone y envíenos una solicitud de extracción (pull request).",
    }
    // end text for each block//


    return (
        <div className="top-dashboard">
            <ProjectTitle title={"DASHBRD"}/>
                <div className="view-repo">
                    <button onClick={() => navigate(-1)} className="reposatory-button"><FaBackward size={25} className="repo-icon"/><span>GO BACK</span></button>
                    <a className="reposatory-link" href="https://github.com/Nicolas17ES/Dashboard-react" target="_blank"><button className="reposatory-button"><AiFillGithub size={25} className="repo-icon"/><span>VIEW CODE</span></button></a>
                </div>
            <div className="block-dashboard">
                <Service data={booking}/>
                <TextBlock data={textOne}/>
            </div>
            <div className="block-dashboard reverse-block">
                <Service data={weather}/>
                <TextBlock data={textTwo}/>
            </div>
            <div className="block-dashboard">
                <Service data={news}/>
                <TextBlock data={textThree}/>
            </div>
            <button className="reposatory-button-gallery"><span>GALLERY</span></button>
        </div>
    )
}

export default TopDashboard
