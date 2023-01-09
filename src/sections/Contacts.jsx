import React,{useRef,useState} from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {GrStatusGood} from 'react-icons/gr';
import {HiOutlineXCircle} from 'react-icons/hi';

import emailjs from 'emailjs-com';


const Contacts = () => {

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p6v4x3r', 'template_390wj09', form.current, 'CNLa8YSn0gqstEMaF')
      .then((result) => {
        setSuccess(true);
        // console.log(result.text);
        setTimeout(()=>{
          setSuccess(false);
        },3000)
      }, (error) => {
        setError(true)
          console.log(error.text);
          setTimeout(()=>{
            setError(false);
          },3000)
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            {<MdOutlineEmail  className="contact__option-icon"/>}
            <h4>Email</h4>
            <h5>chikimiracle2000@gmail.com</h5>
            <a href="mailto:chikimiracle2000@gmail.com" target="_blank">
              Send a Message
            </a>
          </div>
          <div className="contact__option">
            {<RiMessengerLine className="contact__option-icon"/>}
            <h4>Messenger</h4>
            <h5>Miracle Chiki</h5>
            <a href="https://m.me/miracle.chiki" target="_blank">
              Send a Message
            </a>
          </div>
          <div className="contact__option">
            {<BsWhatsapp className="contact__option-icon"/>}
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+2349154498129"
              target="_blank"
            >
              Send a Message
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className="btn btn-primary" type="submit" >Send Message</button>
        </form>
        {success &&
          (<div className='contact__form-response'>
          <GrStatusGood className='contact__form-icon' />
          <p >Message sent</p>
          </div>)}
          {error &&
          (<div className='contact__form-response'>
          <HiOutlineXCircle className='contact__form-icon' />
          <p >Failed to send</p>
          </div>)
        }
      </div>
    </section>
  );
};

export default Contacts;
