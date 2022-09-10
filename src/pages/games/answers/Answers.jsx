import './Answers.css'
import Clock from '../../../components/games/clock/Clock'
import Tomorrow from '../../../components/games/tomorrow/Tomorrow'
import {Link, useNavigate} from 'react-router-dom'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import { useContext, useEffect} from 'react'
import {motion} from 'framer-motion'


function Answers() {

    const navigate = useNavigate();
    const {riddleAnswer, dispatch} = useContext(FeedbackContext);

    console.log(riddleAnswer)
    useEffect(() => {
    if(riddleAnswer !== "time" && riddleAnswer !== "Time" && riddleAnswer !== "TIME" && riddleAnswer !== "tomorrow" && riddleAnswer !== "Tomorrow" && riddleAnswer !== "TOMORROW"){
        navigate("/games");
    }
    
  }, [riddleAnswer, navigate]);

    const promptRiddle = () => {
        let reply = prompt(' I never was, I am always to be; everyone is looking, but no one sees me. What am I?');
        if(reply === 'tomorrow' || reply === 'Tomorrow' ||  reply === 'TOMORROW'){
            dispatch({
                    type: 'ANSWER_RIDDLE',
                    payload: reply
                })
        //    navigate('/games/answers')
       } else if ( reply === ''){
           return null;
       } else {
           alert('Wrong answer')
       }
    }

    

    if(riddleAnswer === 'time' || riddleAnswer === 'TIME' || riddleAnswer === 'Time' ){
        return (
            <motion.div
                className="answers"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: .7, delay: .2}}
                exit={{opacity: 0, transition: {duration: .3}}}
              
            >
                <Clock/>
                <div className="bottom-asnwers">
                    <button className="more-riddles" onClick={promptRiddle}>
                        <h3 className="block-title size shake"><sub>next </sub>RIDDLE</h3>
                    </button>
                    <Link to={'/games'}>
                        <h3 className="block-title size shakeit"><sub>take me </sub>OUT</h3>
                    </Link>
                </div>
            </motion.div>
        )
    } else if (riddleAnswer === 'tomorrow' || riddleAnswer === 'TOMORROW' || riddleAnswer === 'Tomorrow') {
        return (
            
            <div
                className="answers"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2, delay: 1}}
            
            >
                 <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: .7, delay: .1}}
                        exit={{opacity: 0, transition: {duration: .4}}} 
                    >
                    <Tomorrow/>
                    <div className="bottom-asnwers lower-bottom">
                        <button className="more-riddles">
                            <h3 className="block-title sizePlus"><sub className="sizePlus blur">what lies behind the</sub> <span className="eye-span">EYES</span></h3>
                        </button>
                        <Link to={'/games'}>
                            <h3 className="block-title sizeMedium shakeit"><sub className="">take me </sub>OUT</h3>
                        </Link>
                    </div>
                </motion.div>
                    
                
            </div>
        )
    } else{
        return(
            <h1>Try Again</h1>
        )
    }

}

export default Answers
