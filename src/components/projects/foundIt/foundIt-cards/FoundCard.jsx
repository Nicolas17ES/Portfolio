import './FoundCard.css'
import Mobile from './Mobile'
import CardText from './CardText'
import Video from './Videos'


import Logo  from '../../../assets/foundIt/Logo.jpg'
import Sign1  from '../../../assets/foundIt/SignUp1.jpg'
import Sign2  from '../../../assets/foundIt/SignUp2.jpg'
import PublicProfile  from '../../../assets/foundIt/PublicProfile.jpg'
import WalkerProfile  from '../../../assets/foundIt/WalkerProfile.jpg'
import Sign3  from '../../../assets/foundIt/SignUp3.jpg'
import RegistrationVideo  from '../../../assets/foundIt/videos/VideoRegistration.mp4'
import LogIn  from '../../../assets/foundIt/LogIn.jpg'
import Menu  from '../../../assets/foundIt/Menu.jpg'
import LostAnimals  from '../../../assets/foundIt/LostAnimals.jpg'
import Animal  from '../../../assets/foundIt/Animal.jpg'
import Map  from '../../../assets/foundIt/Map.jpg'
import MapAnimal  from '../../../assets/foundIt/MapAnimal.jpg'
import VideoAnimalMap from '../../../assets/foundIt/videos/VideoAnimalMap.mp4'
import Connect  from '../../../assets/foundIt/Connect.jpg'
import Request  from '../../../assets/foundIt/FriendRequest.jpg'
import RequestSended  from '../../../assets/foundIt/RequestSended.jpg'
import ExternProfile  from '../../../assets/foundIt/ExternUserProfile.jpg'
import Walkers  from '../../../assets/foundIt/Walkers.jpg'
import AnimalForm  from '../../../assets/foundIt/AnimalForm.jpg'
import AnimalForm2  from '../../../assets/foundIt/AnimalForm2.jpg'
import AnimalImage from '../../../assets/foundIt/AnimalImage.jpg'

import AnimalFormVideo from '../../../assets/foundIt/videos/AnimalForm.mp4'


import Notification  from '../../../assets/foundIt/Notification.png'
import Profile  from '../../../assets/foundIt/UserProfile.jpg'
// your animals
import Friends  from '../../../assets/foundIt/Friends.jpg'
import VideoContact from '../../../assets/foundIt/videos/VideoContact.mp4'
import Settings  from '../../../assets/foundIt/Settings.jpg'
// show settings
import LogOut  from '../../../assets/foundIt/LogOut.jpg'



import { Carousel } from 'react-responsive-carousel';


function FoundCard() {
    return (
        <div className="found-cards-page">
            <Carousel 
                className="carousel" 
                showArrows={true} 
                showStatus={false} 
                useKeyboardArrows={true}  
            >
            <div className="block-found">
                <Mobile image={Logo}/>
                <CardText title={"Logo & Landing Page"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Sign1}/>
                <CardText title={"SignUp Form (1)"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Sign2}/>
                <CardText title={"SignUp Form (2)"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={PublicProfile}/>
                <CardText title={"Register as Public Profile"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={WalkerProfile}/>
                <CardText title={"Register as Walker Profile"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Sign3}/>
                <CardText title={"Optional Profile Picture"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found-video">
                <Video videoProp={RegistrationVideo} posterProp={Sign1}/>
                <CardText title={"Registration Process Video"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={LogIn}/>
                <CardText title={"LogIn Form"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Menu}/>
                <CardText title={"Main Menu"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={LostAnimals}/>
                <CardText title={"Lost Animals"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Animal}/>
                <CardText title={"Individual Animal Info"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={MapAnimal}/>
                <CardText title={"Animal Map Location"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Map}/>
                <CardText title={"Animals in your Area"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found-video">
                <Video videoProp={VideoAnimalMap} posterProp={Logo}/>
                <CardText title={"Animal Location Video"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Connect}/>
                <CardText title={"Connect With Users"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Request}/>
                <CardText title={"View Profile / Friend Request"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={RequestSended}/>
                <CardText title={"Friend Request Sended"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Notification}/>
                <CardText title={"Friend Request Received"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={ExternProfile}/>
                <CardText title={"View User Profile"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Walkers}/>
                <CardText title={"Walkers Profiles"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={AnimalForm}/>
                <CardText title={"Upload Lost Animal Info"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={AnimalForm2}/>
                <CardText title={"Upload Lost Animal Info(2)"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={AnimalImage}/>
                <CardText title={"Upload Animal Image"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found-video">
                <Video videoProp={AnimalFormVideo} posterProp={Logo}/>
                <CardText title={"Lost Animal Creation Video"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Profile}/>
                <CardText title={"Your User Profile"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Friends}/>
                <CardText title={"Your Friends"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found-video">
                <Video videoProp={VideoContact} posterProp={ExternProfile}/>
                <CardText title={"Contact Other Users video"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={Settings}/>
                <CardText title={"Change Profile Settings"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            <div className="block-found">
                <Mobile image={LogOut}/>
                <CardText title={"LogOut"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni labore aspernatur modi, illo aut accusamus, minus ducimus quis laboriosam nobis in id esse commodi qui maiores. Sequi, omnis eligendi."}/>
            </div>
            
            </Carousel>
        </div>
    )
}

export default FoundCard

