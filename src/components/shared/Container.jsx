import FeedbackContext from '../../context/feedback/FeedbackContext'
import {useState, useContext, useRef} from 'react'

function Container({children}) {
    const {blurry, showModal, dispatch} = useContext(FeedbackContext);

    const hideModal = () => {
        dispatch({
            type: "SHOW_MODAL",
            payload: false
        })
    }
    const containerRef = useRef();

    if(blurry === true){
        containerRef.current.classList.add("blurry-body")
    } else {
        containerRef.current?.classList?.remove("blurry-body")
    }
 
   

    return (
        <div onClick={hideModal} ref={containerRef} className="fake-container">
            {children}
        </div>
    )
}

export default Container
