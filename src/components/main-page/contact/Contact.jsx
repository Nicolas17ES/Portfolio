import './Contact.css'
import  {ReactComponent as ContactSvg } from '../../assets/contact.svg'
import { useState, useContext, useRef, useEffect } from 'react';
import { send } from 'emailjs-com';
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import ModalVinyl from './ModalEmail'
import Spinner from '../../shared/spinner/Spinner'
import {motion} from 'framer-motion'



function Contact() {
    const {dispatch, modal, isLoading, scroll} = useContext(FeedbackContext);
    const scrollTo = useRef();

    // scroll till this point//
    useEffect(() => {
        if(scroll === "contact"){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }

    }, [scroll, dispatch])

    const [toSend, setToSend] = useState({
        from_name: '',
        subject: '',
        message: '',
        from_email: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "LOADING",
            payload: true,
        })
        send(
        'service_f19r8fj',
        'template_9evdwr6',
        toSend,
        'user_9JculMTsN4QgAy2qJs3NG'
        )
        .then((response) => {
            dispatch({
                type: "LOADING",
                payload: false,
            })
            displayModalEmail();
            setToSend({
                from_name: '',
                subject: '',
                message: '',
                from_email: '', 
            })
        })
        .catch((err) => {
            dispatch({
                type: "LOADING",
                payload: false,
            })
            alert(`Error: " + ${err} + ". " + "Please try again later.`)
        });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const displayModalEmail = () => {
        dispatch({
            type: "MODAL",
            payload: 4,
        })
        dispatch({
            type: "SHOW_MODAL",
            payload: true,
        })
    }

    const modalToShow = () => {
        if(modal === 4){return <ModalVinyl title={"Success"} body={"Your message has been succesfully sent. You will shortly receive a reply. Thank you. "}/>}
        else{ return null}
    }

    if(isLoading){
        return (
            <Spinner/>
        )
    } else {
        return (
            <motion.div 
                className="contact-page"
                initial={{width: 0}}
                animate={{width: "100%"}}
                exit={{x: window.innerWidth, transition: {duration: 0.1}}}
            >
                <span ref={scrollTo} className="top-absolute"></span>
                <section className="form-border">
                    <div className="contact-left">
                        <h3 className="contact-title">Let's Work Together!</h3>
                        <p className="contact-text">I am always open for any kind of collaboration or work opportunity. If you liked what you have seen just drop me a line and I will get back to you in the next 24h!</p>
                        <ContactSvg className="contact-svg"/>
                    </div>
                    <div className="contact-hide">
                        <h3>Let's Work Together!</h3>
                    </div>
                    <div className="contact-right">
                        <form className="contact-form" onSubmit={onSubmit}>
                            <div className="group">      
                                <input name="from_name" value={toSend.from_name} onChange={handleChange} className="input-contact" type="text" required></input>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label className="label-contact">Name</label>
                            </div>
                            <div className="group">      
                                <input name="from_email" value={toSend.from_email} onChange={handleChange} className="input-contact" type="email" required></input>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label className="label-contact">Email</label>
                            </div>
                            <div className="group">      
                                <input name="subject" value={toSend.subject} onChange={handleChange} className="input-contact" type="text" required></input>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label className="label-contact">Subject</label>
                            </div>
                            <div className="group">      
                                <textarea name="message" value={toSend.message} onChange={handleChange} className="contact-message input-contact" type="textarea" required></textarea>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label className="label-contact">Your Message</label>
                            </div>
                            <button className="contact-submit" type="submit">Send</button>
                        </form>
                    </div>
                    {modalToShow()}
                </section>
            </motion.div>
        )
    }

}

export default Contact
