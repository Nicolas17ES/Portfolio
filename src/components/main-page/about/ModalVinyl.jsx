import './Modal.css'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../../../context/feedback/FeedbackContext'

function ModalVinyl({show}) {

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
        document.body.style.overflow = "scroll"
    }

    
    const display = () => {
        if(showModal){
            return (
                <div className="modal-blur" onClick={closeModal}>
                    <div className={`modal ${showModal === true ? "show" : ""}`}>
                    <div  onClick={e => e.stopPropagation()} className="modal-content">
                        <div className="modal-header">
                            <h3>Title goes here</h3>
                        </div>
                        <div className="modal-body">
                            This will be the body
                        </div>
                        <div className="modal-footer">
                            <buttton onClick={closeModal} className="close-modal">Close</buttton>
                        </div>
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

ModalVinyl.propTypes = {
    show: PropTypes.boolean,

}

export default ModalVinyl
