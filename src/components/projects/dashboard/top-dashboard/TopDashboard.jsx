import { useNavigate} from 'react-router-dom'
import { useContext } from 'react'

import './TopDashboard.css'
import Service from '../services/Service'
import TextBlock from '../text-block/TextBlock'
import ProjectTitle from '../../projectTitles/ProjectTitle'

import {AiFillGithub} from 'react-icons/ai'
import {FaBackward} from 'react-icons/fa'
import FeedbackContext from '../../../../context/feedback/FeedbackContext'


function TopDashboard() {

    const {dispatch} = useContext(FeedbackContext);

    const scrollToGallery = () => {
        dispatch({
                type: 'SCROLL_VIEW',
                payload: "DASH_GALLERY"
            })
    }


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
        text: "As you will see I created a series of gadgets that users will be able to use upon registration such as a Flight Search Engine, a Weather and News finder and an integration of Google Maps so users can find locations of their own interest.",
    }
    const textTwo = {
        text: "More gadgets are meant to be added before deployment. So it is a work in progress. Users that want to save any available gadgets in their profile for later use will have to be previously registred and logged in so their data can be saved.",
    }
    const textThree = {
        text: "For this project besides state management I also wanted to test how Google Authentication works. Users can then register through their Google account or just by filling in the resitration form.",
    }
    // end text for each block//


    return (
        <div className="top-dashboard">
            <ProjectTitle title={"DASHBRD"}/>
                <div className="view-repo">
                    <button onClick={() => navigate(-1)} className="reposatory-button"><FaBackward size={25} className="repo-icon"/><span>GO BACK</span></button>
                    <a className="reposatory-link" href="https://github.com/Nicolas17ES/Dashboard-react" rel="noreferrer"  target="_blank"><button className="reposatory-button"><AiFillGithub size={25} className="repo-icon"/><span>VIEW CODE</span></button></a>
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
            <button className="reposatory-button-gallery" onClick={scrollToGallery}><span>GALLERY</span></button>
        </div>
    )
}

export default TopDashboard
