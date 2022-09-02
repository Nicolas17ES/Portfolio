import './Tomorrow.css'
import {useState} from 'react'
import {motion} from 'framer-motion'

function Tomorrow() {

    const [turnAround, setTurnAround] = useState(false);
    const [answer, setAnswer] = useState('');

    const turn = () => {
        setTurnAround(!turnAround);
    }

    

    // if(!turnAround){
        return (
            <div className="reply-time">
                <div className="reply">
                    <h1 className="title-all-clock"> <sub className="title-sub-clock">' tomorrow '</sub><span className="title-main-clock">TOMORROW</span></h1>
                </div>
                <motion.div drag className="games-hearts">
                    <div className="tomorrow" onClick={turn}>
                        <p className="nothing">[nothing to see]</p>
                    </div>
                    <div className="tomorrow" onClick={turn}>
                        <p className="nothing">[nothing to see]</p>
                    </div>
                </motion.div>
                <div className="behind-eyes">
                    <h5>the truth</h5>
                    <h5>the truth</h5>
                </div>
            </div>
        )
    // } else if(turnAround){
    //     return (
    //         <div className="reply-time">
    //             <div className="reply">
    //                 <h1 className="title-all-clock"> <sub className="title-white">' eye '</sub><span className="title-main-clock">E<span className="spanY">Y</span>E</span></h1>
    //             </div>
    //             <div className="tomorrow-input">
    //                 <input type="text" className="riddle-input" placeholder="take a guess"/>
    //             </div>
    //         </div>
    //     )
    // }
}

export default Tomorrow
