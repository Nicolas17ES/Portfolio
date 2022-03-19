import {CgPill} from 'react-icons/cg'
import './Pills.css'

function Pills() {
    return (
        <div className="question">
            <img className="morpheus" alt=""/>
            <div className="pills">
                <span className="red-pill"><CgPill/></span>
                <span className="blue-pill"><CgPill/></span>        
            </div>
            <div className="text-pills">
                 <p className="access-website">Play A Game</p>
                <p className="play-game">Acces Website</p>
            </div>
        </div>

    )
}

export default Pills
