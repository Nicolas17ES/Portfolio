import {CgPill} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import './Pills.css'

function Pills() {

    return (
        <div className="question">
            <img className="morpheus" alt=""/>
            <div className="pills">
                <span className="red-pill"><Link to="/paper"><CgPill/></Link></span>

                
                <span className="blue-pill"><Link to="/home"><CgPill/></Link></span>
                
                        
            </div>
            <div className="text-pills">
                 <p className="access-website">Play A Game</p>
                <p className="play-game">Acces Website</p>
            </div>
        </div>

    )
}

export default Pills
