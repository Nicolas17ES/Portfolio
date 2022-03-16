import {useState} from 'react';
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {FcLike} from 'react-icons/fc'
import {ImCheckboxUnchecked} from 'react-icons/im'
import {useContext, useEffect} from 'react'
import FeedbackContext from '../../context/feedback/FeedbackContext'
import {deleteFeedback, fetchLikes, addLike} from '../../context/feedback/FeedBackActions'

 
function FeedbackItem({item}) {
        const {dispatch, feedback, likes} = useContext(FeedbackContext);

        //get likes//

         async function getTheLikes() {
           const data = await fetchLikes(item.feedback_id);

                dispatch({
                    type: 'GET_LIKES',
                    payload: data
                })
           }

        useEffect(() => {
           getTheLikes()
        }, [])

        //get likes for each item//
        const likePerItem = likes.filter((like) => like.feedback_id == item.feedback_id)
            

        //add a like to a feedback//
        const addALike = async () => {
            const info = {
                feedback_id: item.feedback_id,
            }
            const payload = [info, ...likes]

            await addLike(info)
            dispatch({
                    type: 'GET_LIKES',
                    payload: payload,
            
                })
        }

        //delete a feedback item
        async function deleteTheFeedback (id){
           const data = await deleteFeedback(item.feedback_id);
           if(data != null){
                let payload = feedback.filter((item) => item.feedback_id != id)
                dispatch({
                    type: 'GET_FEEDBACK',
                    payload: payload
                })
           }
             
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
            <button onClick={() => deleteTheFeedback(item.feedback_id)} className="close"><FaTimes color="purple"/></button>
            <button onClick={editFeedback} className="edit"><FaEdit color="purple"/></button>
            <button onClick={addALike} className="like"><FcLike color="purple"/></button>
            <p className="likesCount">{likePerItem.length}</p>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
