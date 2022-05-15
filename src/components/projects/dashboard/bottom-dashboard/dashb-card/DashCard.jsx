import './DashCard.css'
import Computer from '../computer/Computer'
import { Carousel } from 'react-responsive-carousel';
import Welcome  from '../../../../assets/dashboard/FlightResults.png'

function DashCard() {
    return (
        <div className="dash-cards-page">
             {/* <Carousel 
                className="carousel" 
                showArrows={true} 
                showStatus={false} 
                useKeyboardArrows={true}  
            > */}
                <div className="block-dash">
                    <Computer image={Welcome}/>
                </div>
            {/* </Carousel> */}
        </div>
    )
}

export default DashCard
