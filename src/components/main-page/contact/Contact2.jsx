import './Contact2.css'
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

    if(!isLoading){
        return (
            <motion.div 
                className="contact-page"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: .4, delay: .1}}
                exit={{opacity: 0, transition: {duration: .2}}}
            >
                
                <span ref={scrollTo} className="top-absolute"></span>
                <section className="form-border">
                    <div className="show-form">
                        <div className="arrowAnim">
                            <div className="arrowSliding">
                                <div className="arrow-contact"></div>
                            </div>
                            <div className="arrowSliding delay1">
                                <div className="arrow-contact"></div>
                            </div>
                            <div className="arrowSliding delay2">
                                <div className="arrow-contact"></div>
                            </div>
                        </div>
                        <div class="estrellas">
                            <span>L</span>
                            <span>E</span>
                            <span>T</span>
                            <span>'</span>
                            <span>S</span>
                            <span> </span>
                            <span>T</span>
                            <span>A</span>
                            <span>L</span>
                            <span>K</span>
                        </div>                    
                    </div>
                    <div className="contact-right">
                        <form autocomplete="off" className="contact-form" onSubmit={onSubmit}>
                            <div className="group">      
                                <input name="from_name" value={toSend.from_name} onChange={handleChange} className="input-contact" type="text" required></input>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label className="label-contact">Name</label>
                            </div>
                            <div className="group">      
                                <input name="from_email" value={toSend.from_email} onChange={handleChange} className="input-contact" type="email" autocomplete="off"  required></input>
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
                            <button className="contact-submit2" type="submit">Send</button>
                        </form>
                    </div>
                    {modalToShow()}
                </section>
            </motion.div>
        )
    } else {
        return (
            <Spinner/>
        )      
    }

}

export default Contact
