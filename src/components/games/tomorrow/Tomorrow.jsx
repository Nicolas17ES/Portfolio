import './Tomorrow.css'
import {motion} from 'framer-motion'
import {CgPill} from 'react-icons/cg'
import {Link} from 'react-router-dom'

function Tomorrow() {



        return (
            <div className="reply-time">
                <div className="reply">
                    <h1 className="title-all-clock title-tomorrow"> <sub className="title-sub-clock">' tomorrow '</sub><span className="title-main-clock">TOMORROW</span></h1>
                </div>
                <motion.div drag className="games-hearts">
                    <div className="tomorrow">
                        <p className="nothing">[nothing to see]</p>
                    </div>
                    <div className="tomorrow">
                        <p className="nothing">[nothing to see]</p>
                    </div>
                </motion.div>
                <div className="behind-eyes">
                    <Link to="/games/rock">
                    <div className="pills-background">
                        <span className="red-pill-tom"><CgPill size={36}/></span>
                    </div>
                    </Link>
                    <Link to="/home"> 
                    <div className="pills-background">
                        <span className="blue-pill-tom"><CgPill size={36}/></span>
                    </div>
                    </Link> 
                </div>
            </div>
        )

}

export default Tomorrow
