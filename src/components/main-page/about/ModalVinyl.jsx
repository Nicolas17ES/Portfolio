import './Modal.css'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import Timeline from './timeline/Timeline'
import {CgCloseO} from 'react-icons/cg'

function ModalVinyl({data}) {

    const {showModal, dispatch} = useContext(FeedbackContext);

    const closeModal = () => {
        dispatch({
            type: "SHOW_MODAL",
            payload: false,
        })
    }

    if(showModal){
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflowX = "hidden"
        document.body.style.overflowY = "scroll"
    }

    
    const display = () => {
        if(showModal ){
            return (
                <div className="modal-blur" onClick={closeModal}>
                    <div className={`modal-about ${showModal === true ? "show" : ""}`}>
                    <div  onClick={e => e.stopPropagation()} className="modal-content-about">
                        <Timeline data={data}/>
                        {/* <div className="modal-header">
                            <h3>{title}</h3>
                        </div>
                        <div className="modal-body">
                            {body}
                        </div> */}
                        {/* <div onClick={closeModal} className="modal-footer-about"> */}
                            {/* <buttton onClick={closeModal} className="close-modal">Close</buttton> */}
                            <button onClick={closeModal} className="close-modal-about" ><CgCloseO size={25} className="modal-icon"/></button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            )
        } else {
            return null
        }
    }
    return (
        display()

    )
}

// ModalVinyl.propTypes = {
//     title: PropTypes.string,
//     body: PropTypes.body,

// }

export default ModalVinyl