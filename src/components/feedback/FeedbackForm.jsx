import Card from '../shared/Card'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'
import {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../../context/feedback/FeedbackContext'
import {addFeedback, updateFeedback} from '../../context/feedback/FeedBackActions'
import Button2 from '../shared/Button2'
import PropTypes from 'prop-types'




function FeedbackForm({data}) {
    const {feedbackEdit, feedback, dispatch} = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const formInfo = {
        title: data.formTitle,
        questionNumber: data.questionNumber
    }
    
    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    }, [feedbackEdit])



    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text != '' && text.trim().length < 10){
            setBtnDisabled(true)
            setMessage('Insert at least 10 charachters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(text.trim().length >= 10){
            const newFeedback = {
                text,
                rating,
                questionNumber: formInfo.questionNumber,
                
            }
            if(feedbackEdit.edit === true){

                await updateFeedback(feedbackEdit.item.feedback_id, newFeedback)
                console.log(feedbackEdit.item.feedback_id)
                
                let payload = feedback.map((item) => (item.feedback_id === feedbackEdit.item.feedback_id ? {...item, ...newFeedback} : item))
                
                dispatch({
                    type: 'GET_FEEDBACK',
                    payload: payload
                })

                dispatch({
                    type: "UPDATE_FEEDBACK"
                })
            } else {
                async function addTheFeedback(){
                    await addFeedback(newFeedback)
                    let payload = [newFeedback, ...feedback]
                    dispatch({
                            type: 'GET_FEEDBACK',
                            payload: payload
                        })
                    setText('')
                }
                addTheFeedback();
            }
            setText('')
        }
        
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>{formInfo.title}</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write your review" name="" id=""/>
                    <Button type="submit" isDisabled={btnDisabled}> Send </Button>
                </div>
            {message && <div className="message">{message}</div>}
            </form>
            <Button2 text="View project"/>
        </Card>
    )
}


FeedbackForm.propTypes = {
    formTitle: PropTypes.string,

}

export default FeedbackForm
