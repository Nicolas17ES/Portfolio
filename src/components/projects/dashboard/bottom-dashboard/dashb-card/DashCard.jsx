import './DashCard.css'

import {useContext, useEffect, useRef} from 'react'
import FeedbackContext from '../../../../../context/feedback/FeedbackContext'

import Video from '../video/VideoDash'
import Title from '../title/VideoTitle'
// import { Carousel } from 'react-responsive-carousel';

// carousel

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// images
import FlightResults  from '../../../../assets/dashboard/FlightResults2.png'
import Aviasales  from '../../../../assets/dashboard/Aviasales1.png'
import Dashboard  from '../../../../assets/dashboard/Dashboard.png'
import Flights  from '../../../../assets/dashboard/Flights.png'
import LogIn  from '../../../../assets/dashboard/LogIn.png'
import News  from '../../../../assets/dashboard/News.png'
import News2  from '../../../../assets/dashboard/News2.png'
import Weather  from '../../../../assets/dashboard/Weather.png'
import UserDashboard  from '../../../../assets/dashboard/UserDashboard.png'
import UserEmpty  from '../../../../assets/dashboard/UserEmpty.png'
import Welcome  from '../../../../assets/dashboard/Welcome.png'

// videos
// import AdminPanelVideo  from '../../../../assets/dashboard/AdminPanel.mov'
// import FlightsVideo  from '../../../../assets/dashboard/FlightsVideo.mp4'
// import GoogleLogInVideo  from '../../../../assets/dashboard/LogInVideo.mp4'
// import GoogleRegisterVideo  from '../../../../assets/dashboard/RegisterVideo.mp4'
// import NewsVideo  from '../../../../assets/dashboard/News.mov'
// import WeatherVideo  from '../../../../assets/dashboard/Weather.mov'

function DashCard() {

    const {scroll, dispatch} = useContext(FeedbackContext);
    const scrollToHere = useRef();
    


    useEffect(() => {
        if(scroll === "DASH_GALLERY"){
            scrollToHere.current.scrollIntoView({ behavior: "smooth", block: "center"})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }

    }, [scroll, dispatch])

    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,      
    };
    
    return (
        <div className="dash-cards-page">
            <span ref={scrollToHere} className="center-absolute"></span>
          
            <Slider {...settings}>
                <div className="block-dash">
                    <Title title={"HOME PAGE"}/>
                    <img src={Welcome} alt="main page"></img>
                </div>
                <div className="block-dash">
                    <Title title={"LOGIN"}/>
                    <img src={LogIn} alt="login"></img>
                </div>
                <div className="block-dash">
                    <Title title={"LOGIN GOOGLE"}/>
                    <Video videoProp={"../../../../../../public/assets/dashboard/LogInVideo.mp4"} posterProp={Welcome}/>
                </div>
                <div className="block-dash">
                    <Title title={"GOOGLE AUTH"}/>
                    <Video videoProp={"../../../../../../public/assets/dashboard/RegisterVideo.mp4"} posterProp={Welcome}/>
                </div>
                <div className="block-dash">
                    <Title title={"DASHBOARD"}/>
                    <img src={Dashboard} alt="main dashboard"></img>
                </div>
                <div className="block-dash">
                    <Title title={"PROFILE (1)"}/>
                    <img src={UserEmpty} alt="user empty profile"></img>
                </div>
                <div className="block-dash">
                    <Title title={"PROFILE(2)"}/>
                    <img src={UserDashboard} alt="user profile with gadgets added"></img>
                </div>
                <div className="block-dash">
                    <Title title={"FLIGHT BOOKING"}/>
                    <Video videoProp={"../../../../../../public/assets/dashboard/FlightsVideo.mp4"} posterProp={FlightResults}/>
                </div>
                <div className="block-dash">
                    <Title title={"FLIGHTS FORM"}/>
                    <img src={Flights} alt="flights gadget"></img>
                </div>
                <div className="block-dash">
                    <Title title={"FLIGHT RESULTS"}/>
                    <img src={FlightResults} alt="flight results"></img>
                </div>
                <div className="block-dash">
                    <Title title={"TICKETS"}/>
                    <img src={Aviasales} alt="flight tickets"></img>
                </div>
                <div className="block-dash">
                    <Title title={"NEWS VIDEO"}/>
                    <Video videoProp={"../../../../../../public/assets/dashboard/News.mov"} posterProp={News}/>
                </div>
                <div className="block-dash">
                    <Title title={"NEWS"}/>
                    <img src={News} alt="news result"></img>
                </div>
                <div className="block-dash">
                    <Title title={"NEWS (2)"}/>
                    <img src={News2} alt="news result 2"></img>
                </div>
                <div className="block-dash">
                    <Title title={"WEATHER VIDEO"}/>
                    <Video videoProp={"../../../../../../public/assets/dashboard/Weather.mov"} posterProp={Weather}/>
                </div>
                <div className="block-dash">
                    <Title title={"WEATHER"}/>
                    <img src={Weather} alt="weather gadget result"></img>
                </div>
                <div className="block-dash">
                    <Title title={"ADMIN PANEL"}/>
                    <Video videoProp={"../../../../../../public/assets/dashboard/AdminPanel.mov"} posterProp={Welcome}/>
                </div>
            </Slider>
{/*           
            <Slider {...settings}>
                <div className="block-dash">
                    <Title title={"HOME PAGE"}/>
                    <Computer image={Welcome}/>
                </div>
                <div className="block-dash">
                    <Title title={"LOGIN"}/>
                    <Computer image={LogIn}/>
                </div>
                <div className="block-dash">
                    <Title title={"LOGIN GOOGLE"}/>
                    <Video videoProp={GoogleLogInVideo} posterProp={Welcome}/>
                </div>
                <div className="block-dash">
                    <Title title={"GOOGLE AUTH"}/>
                    <Video videoProp={GoogleRegisterVideo} posterProp={Welcome}/>
                </div>
                <div className="block-dash">
                    <Title title={"DASHBOARD"}/>
                    <Computer image={Dashboard}/>
                </div>
                <div className="block-dash">
                    <Title title={"PROFILE (1)"}/>
                    <Computer image={UserEmpty}/>
                </div>
                <div className="block-dash">
                    <Title title={"PROFILE(2)"}/>
                    <Computer image={UserDashboard}/>
                </div>
                <div className="block-dash">
                    <Title title={"FLIGHT BOOKING"}/>
                    <Video videoProp={FlightsVideo} posterProp={FlightResults}/>
                </div>
                <div className="block-dash">
                    <Title title={"FLIGHTS FORM"}/>
                    <Computer image={Flights}/>
                </div>
                <div className="block-dash">
                    <Title title={"FLIGHT RESULTS"}/>
                    <Computer image={FlightResults}/>
                </div>
                <div className="block-dash">
                    <Title title={"TICKETS"}/>
                    <Computer image={Aviasales}/>
                </div>
                <div className="block-dash">
                    <Title title={"NEWS VIDEO"}/>
                    <Video videoProp={NewsVideo} posterProp={News}/>
                </div>
                <div className="block-dash">
                    <Title title={"NEWS"}/>
                    <Computer image={News}/>
                </div>
                <div className="block-dash">
                    <Title title={"NEWS (2)"}/>
                    <Computer image={News2}/>
                </div>
                <div className="block-dash">
                    <Title title={"WEATHER VIDEO"}/>
                    <Video videoProp={WeatherVideo} posterProp={Weather}/>
                </div>
                <div className="block-dash">
                    <Title title={"WEATHER"}/>
                    <Computer image={Weather}/>
                </div>
                <div className="block-dash">
                    <Title title={"ADMIN PANEL"}/>
                    <Video videoProp={AdminPanelVideo} posterProp={Welcome}/>
                </div>
            </Slider> */}
        </div>
    )
}

export default DashCard
