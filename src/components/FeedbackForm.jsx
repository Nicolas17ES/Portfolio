import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    
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

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length >= 10){
            const newFeedback = {
                text,
                rating,
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

            setText('')
        }
        
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Please rate my Portfolio and share your opinion with others</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write your review" name="" id=""/>
                    <Button type="submit" isDisabled={btnDisabled}> Send </Button>
                </div>
            {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
