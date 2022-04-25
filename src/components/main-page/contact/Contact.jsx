import './Contact.css'
import  {ReactComponent as ContactSvg } from '../../assets/contact.svg'

function Contact() {
    return (
        <div className="contact-page">
            <section className="form-border">
                <div className="contact-left">
                    <h3 className="contact-title">Let's Work Together!</h3>
                    <p className="contact-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id facilis laudantium nesciunt praesentium eius quidem modi ist hahah hola pedro yuguu.</p>
                    <ContactSvg className="contact-svg"/>
                </div>
                <div className="contact-right">
                    <form className="contact-form" action="">
                        <div className="group">      
                            <input className="input-contact" type="text" required></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className="label-contact">Name</label>
                        </div>
                        <div className="group">      
                            <input className="input-contact" type="email" required></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className="label-contact">Email</label>
                        </div>
                        <div className="group">      
                            <input className="input-contact" type="text" required></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className="label-contact">Subject</label>
                        </div>
                        <div className="group">      
                            <textarea className="contact-message input-contact" type="textarea" required></textarea>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className="label-contact">Your Message</label>
                        </div>
                        <button className="contact-submit" type="submit">Send</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
