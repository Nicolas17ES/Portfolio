import Card from '../shared/Card'
import Button from '../shared/Button'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {FcLike} from 'react-icons/fc'
import {BsReply} from 'react-icons/bs'
import {useContext, useEffect, useState} from 'react'
import FeedbackContext from '../../context/feedback/FeedbackContext'
import {deleteFeedback, fetchLikes, addLike, getReplies, addReply} from '../../context/feedback/FeedBackActions'

 
function FeedbackItem({item}) {
        const {dispatch, feedback, likes, replies} = useContext(FeedbackContext);
        const [text, setText] = useState('');

        //get likes//

         async function getTheLikes() {
           const data = await fetchLikes();

                dispatch({
                    type: 'GET_LIKES',
                    payload: data
                })
           }
        
        //get replies//
        async function getTheReplies() {
           const data = await getReplies(item.feedback_id);

                dispatch({
                    type: 'GET_REPLIES',
                    payload: data
                })
           }

        useEffect(() => {
           getTheLikes()
           getTheReplies()
        }, [])

        //get likes for each feedback item//
        const likePerItem = likes.filter((like) => like.feedback_id == item.feedback_id)

        //get reply per each feedback item//
        const replyPerItem = replies.filter((reply) => reply.feedback_id == item.feedback_id)
            

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

        //handle replies, add text of input to state//
        const handleTextChange = (e) => {
            setText(e.target.value)
        }

        const handleSubmit = async (e) => {
            e.preventDefault()

            const replyData = {
                feedback_id: item.feedback_id,
                comment: text,
            }
        
            await addReply(replyData)
            const payload = [replyData, ...replies]
            dispatch({
                type: 'GET_REPLIES',
                payload: payload
            }) 
            setText('')

        }



    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            {/* buttons */}
            <button onClick={() => deleteTheFeedback(item.feedback_id)} className="close"><FaTimes color="purple"/></button>
            <button onClick={editFeedback} className="edit"><FaEdit color="purple"/></button>
            <button onClick={addALike} className="like"><FcLike color="purple"/></button>
            {/* likes */}
            <p className="likesCount">{likePerItem.length}</p>
            {/* main text */}
            <div className="text-display">{item.text}</div>
            {/* replies */}
            <div className="replies">
                {replyPerItem && replyPerItem.map((reply) => <div className="flex"><BsReply className="reply-icon" size={22}/><p>{reply.comment}</p></div>)}
            </div>
            {/* reply form */}
            <form className="reply mt-5" onSubmit={handleSubmit}>
                <div className="input-group2">
                    <input className="input2" onChange={handleTextChange} value={text} type="text" placeholder="Add a reply" name="" id=""/>
                    <button className="button-reply" type="submit"> Send </button>
                </div>
            </form>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
