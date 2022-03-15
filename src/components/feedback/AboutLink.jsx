import {AiOutlineArrowRight} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function AboutLink() {
    return (
        <div className="about-link">
            <Link to="/about">
                <AiOutlineArrowRight size={30}/>
            </Link>
        </div>
    )
}

export default AboutLink
