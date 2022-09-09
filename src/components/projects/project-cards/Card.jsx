import './Card.css'

import {AiFillPlusCircle} from 'react-icons/ai'

function Card({founditApp}) {
    return (
        <div className="project-card">
            {founditApp.title}
            <p className="project-subtitle">{founditApp.subtitle}</p>
            <div className="about-and-icos">
                <div className="lang-fram">
                    <section className="project-top uno">
                        {founditApp.logo1}
                    </section>
                    <section className="project-top dos">
                        {founditApp.logo2}                   
                    </section>
                    <section className="project-top tres">
                        {founditApp.logo3}
                    </section>
                    <section className="project-top cuatro">
                        {founditApp.logo4}     
                    </section>
                
                </div>
            </div>
            <div >
                
                {/* <AiFillPlusCircle className="plus-icon-projects" size={25}/> */}
            </div>
        </div>
    )
}

export default Card
