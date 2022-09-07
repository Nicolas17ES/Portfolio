import './Loader.css'
import {motion} from 'framer-motion'
import {useState, useEffect} from 'react'
import { useNavigate, Link} from 'react-router-dom'

function Loader() {

    const navigate = useNavigate();

    const [load, setLoad] = useState(false)

    useEffect(() => {

        setTimeout(function(){
            setLoad(true)
        }, 3000);

        if(load){
            navigate("/home")
        }




    }, [load]);


        return (
            <motion.div
                className="main-loader"
                 initial={{width: 0}}
                animate={{width: "100%"}}
                exit={{x: window.innerWidth, transition: {duration: 0.3}}}
                transition={{type: 'tween'}}
            
            >
                <div class="container-loader">
                    <div class="dash uno-load"></div>
                    <div class="dash dos-load"></div>
                    <div class="dash tres-load"></div>
                    <div class="dash cuatro-load"></div>
                </div>
                <div className="ready">
                    <h5 className="loading-animation">
                        Loading
                    </h5>
                </div>
            </motion.div>
        )
    // } else {
    //     return (
    //         <motion.div
    //             className="main-loader"
    //             initial={{width: 0}}
    //             animate={{width: "100%"}}
    //             exit={{x: window.innerWidth, transition: {duration: 0.3}}}
    //             transition={{type: 'tween'}}
    //         >
    //             <motion.div
    //             className="container-loader-2"
    //                 initial={{opacity: 0}}
    //                 animate={{opacity: 1}}
    //                 transition={{duration: .8}}
    //                 exit={{opacity: 0}}
    //             >
    //                 <div className="arrowAnim">
    //                         <div className="arrowSliding">
    //                             <div className="arrow-contact"></div>
    //                         </div>
    //                         <div className="arrowSliding delay1">
    //                             <div className="arrow-contact"></div>
    //                         </div>
    //                         <div className="arrowSliding delay2">
    //                             <div className="arrow-contact"></div>
    //                         </div>
    //                 </div>

    //                 <div className="load-start">
    //                     <Link to="/home">
    //                         Start
    //                     </Link>
    //                 </div>
                    
    //             </motion.div>

    //         </motion.div>
            
    //     )
    // }
}

export default Loader
