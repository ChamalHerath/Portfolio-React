import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_fdkjp0p', 'template_ke4vqer', form.current, 'QCbWjKhgFIyzjwsW9')
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>How to Reach Me</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <AiOutlineMail className='contact_option_icon'/>
                        <h4>Email</h4>
                        <h5>chamaljanadara@gmail.com</h5>
                        <a href="mailto:chamaljanadara@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className='contact_option'>
                        <BsMessenger className='contact_option_icon'/>
                        <h4>Messenger</h4>
                        <h5>Chamal Janadara</h5>
                        <a href="https://m.me/chamal.janadara" target="_blank">Send a Message</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option_icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+94 77 821 3649</h5>
                        <a href="https://wa.me/+94778213649" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Enter Your Name" required/>
                    <input type="email" name="email" placeholder="Enter Your Email" required/>
                    <textarea name="message" placeholder="Your Message" rows="5" required/>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}
