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



// carousel

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function FoundCard() {
     const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,      
        };

    return (
        <>
        <button className="gallery-foundit">GALLERY</button>
        <div className="found-cards-page">
            
            <div className="test-found">
                <Slider {...settings}>
                <div className="block-found">
                    <Mobile image={Logo}/>
                    <CardText title={"Logo & Landing Page"} text={"Upon opening the application users will first see the FoundIt Logo and the base colors chosen for the project."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Sign1}/>
                    <CardText title={"SignUp Form (1)"} text={"Users can view lost animals but will not be able to interact with other users unless they resiter and have their own profile."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Sign2}/>
                    <CardText title={"SignUp Form (2)"} text={"Part of all the information required to create a profile."}/>
                </div>
                <div className="block-found">
                    <Mobile image={PublicProfile}/>
                    <CardText title={"Register as Public Profile"} text={"If users want to receive, send or interact with other users then a Public Profile is required. This can also be changed in settings after the profile has been created."}/>
                </div>
                <div className="block-found">
                    <Mobile image={WalkerProfile}/>
                    <CardText title={"Register as Walker Profile"} text={"Those animal lovers who would love to take care of other users best friends can create a walker profile wihch will be automatically public as well."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Sign3}/>
                    <CardText title={"Optional Profile Picture"} text={"Profile pictures are optional for users who want to include them."}/>
                </div>
                <div className="block-found-video">
                    <Video videoProp={RegistrationVideo} posterProp={Sign1}/>
                    <CardText title={"Registration Process Video"} text={"Video demonstrating how the registration process works."}/>
                </div>
                <div className="block-found">
                    <Mobile image={LogIn}/>
                    <CardText title={"LogIn Form"} text={"Once users are registered, everytime they logout of the App and want to access it again their email and password will be required."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Menu}/>
                    <CardText title={"Main Menu"} text={"FoundIt menu showcases the app main functionalities that users have access to. Note that part of the feautres are only available for users who are already regsitered."}/>
                </div>
                <div className="block-found">
                    <Mobile image={LostAnimals}/>
                    <CardText title={"Lost Animals"} text={"List of animals that are currently lost close to your location. Once an animal is found the user can eliminate the information/animal profile and advise other users that were helping in the finding."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Animal}/>
                    <CardText title={"Individual Animal Info"} text={"Users can click on any animal on the list and view all the data that will help them find it. From here they can also view the location."}/>
                </div>
                <div className="block-found">
                    <Mobile image={MapAnimal}/>
                    <CardText title={"Animal Map Location"} text={"After accessing Map Location the aproximately place where the animal was last seen will be displayed. Users can also change that location in case there are updates on the finding."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Map}/>
                    <CardText title={"Animals in your Area"} text={"Back in the main menu users can access the map shown in the bottom menu of the app and all the animals that are lost close to their location will be shown."}/>
                </div>
                <div className="block-found-video">
                    <Video videoProp={VideoAnimalMap} posterProp={Logo}/>
                    <CardText title={"Animal Location Video"} text={"Vide showcasing all the previously mentioned steps on how the user can view a lost animal information and the location."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Connect}/>
                    <CardText title={"Connect With Users"} text={"The next feature displayed in the main menu is Connect, here all the public profiles close to you will be displayed."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Request}/>
                    <CardText title={"View Profile / Friend Request"} text={"Users can access their profile to see if they can help with the finding, but previously a friend request must be sended before any possible interaction."}/>
                </div>
                <div className="block-found">
                    <Mobile image={RequestSended}/>
                    <CardText title={"Friend Request Sended"} text={"Alert that will be shown once the friend request is succesfully sended."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Notification}/>
                    <CardText title={"Friend Request Received"} text={"From the other users perspective this is the notification they will receive once they get send a friend request. They will be able to accept or reject."}/>
                </div>
                <div className="block-found">
                    <Mobile image={ExternProfile}/>
                    <CardText title={"View User Profile"} text={"This is the information availble when a user views another users profile once the friend request has been accepted."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Walkers}/>
                    <CardText title={"Walkers Profiles"} text={"Another feature displayed in the main menu is Walkers Profile. I am planing on adding a rating functionality so users can leave a review on the walkers profile for the rest of the community to see."}/>
                </div>
                <div className="block-found">
                    <Mobile image={AnimalForm}/>
                    <CardText title={"Upload Lost Animal Info"} text={"On the bottom menu displayed in FoundIt the centered button (plus sign) is where the users will click once one of their animals gets lost so they can upload all the data."}/>
                </div>
                <div className="block-found">
                    <Mobile image={AnimalForm2}/>
                    <CardText title={"Upload Lost Animal Info(2)"} text={"Part two of all the information that is required for any animal that gets lost. As you can see some inputs are optional but the more data the easier and faster the animal will be found."}/>
                </div>
                <div className="block-found">
                    <Mobile image={AnimalImage}/>
                    <CardText title={"Upload Animal Image"} text={"An animal image is fully required so other users know what to look for."}/>
                </div>
                <div className="block-found-video">
                    <Video videoProp={AnimalFormVideo} posterProp={Logo}/>
                    <CardText title={"Lost Animal Creation Video"} text={"A video that showcases all the previous steps and how the form process works for lost animals"}/>
                </div>
                <div className="block-found">
                    <Mobile image={Profile}/>
                    <CardText title={"Your User Profile"} text={"Once users are registered this is the main profile that they will have access to."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Friends}/>
                    <CardText title={"Your Friends"} text={"A list of all the friends that have accepted your friend request will be shown so it is easier to get in contact with them."}/>
                </div>
                <div className="block-found-video">
                    <Video videoProp={VideoContact} posterProp={ExternProfile}/>
                    <CardText title={"Contact Other Users video"} text={"I was experiencing a bit of trouble with the creation of an inbox platform where users can directly send messages to one another so until the issue is resolved users can contact each other via email."}/>
                </div>
                <div className="block-found">
                    <Mobile image={Settings}/>
                    <CardText title={"Change Profile Settings"} text={"In the users settings ther will be the option to change to a public/private profile, walker/non-walker profile, change password or edit your username, location, etc."}/>
                </div>
                <div className="block-found">
                    <Mobile image={LogOut}/>
                    <CardText title={"LogOut"} text={"The top right (three dots) button will be clicked to to logout of the application."}/>
                </div>
            
           </Slider>
            </div>
        
        </div>
        </>
    )
}

export default FoundCard

