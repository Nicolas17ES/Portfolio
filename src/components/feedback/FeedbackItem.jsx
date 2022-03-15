import {useState} from 'react';
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../../context/feedback/FeedbackContext'
import {deleteFeedback} from '../../context/feedback/FeedBackActions'

 
function FeedbackItem({item}) {
        const {dispatch, feedback} = useContext(FeedbackContext);

        async function deleteTheFeedback (id){
           await deleteFeedback(item.id);
            let payload = feedback.filter((item) => item.id != id)
            dispatch({
                type: 'GET_FEEDBACK',
                payload: payload
            }) 
        }

        //Set the item to be updated
       function editFeedback () {
            dispatch({
                type: 'EDIT_FEEDBACK',
                payload: item
            })   
        }

        

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteTheFeedback(item.id)} className="close"><FaTimes color="purple"/></button>
            <button onClick={editFeedback} className="edit"><FaEdit color="purple"/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
