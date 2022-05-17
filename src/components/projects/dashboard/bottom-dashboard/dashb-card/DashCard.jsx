import './DashCard.css'
import Computer from '../computer/Computer'
import Video from '../video/VideoDash'
import Title from '../title/VideoTitle'
import { Carousel } from 'react-responsive-carousel';

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
import AdminPanelVideo  from '../../../../assets/dashboard/AdminPanel.mov'
import FlightsVideo  from '../../../../assets/dashboard/FlightsVideo.mp4'
import GoogleLogInVideo  from '../../../../assets/dashboard/LogInVideo.mp4'
import GoogleRegisterVideo  from '../../../../assets/dashboard/RegisterVideo.mp4'
import NewsVideo  from '../../../../assets/dashboard/News.mov'
import WeatherVideo  from '../../../../assets/dashboard/Weather.mov'

function DashCard() {
    return (
        <div className="dash-cards-page">
             <Carousel 
                className="carousel" 
                showArrows={true} 
                showStatus={false} 
                useKeyboardArrows={true}  
            >
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
            </Carousel>
        </div>
    )
}

export default DashCard
