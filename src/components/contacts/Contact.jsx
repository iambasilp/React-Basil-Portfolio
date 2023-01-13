import React, {useRef} from "react";
import emailjs from 'emailjs-com'
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_foemh7d', 'template_f3fuk77', form.current, 'v4AoFK51SXrKqFLTz')
    e.target.reset()
  };
  return (
    <section className="contact section" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__data grid">
          <article className="contact__information">
            <MdOutlineEmail className="contact__inforamtion-icon" />
            <h4>Email</h4>
            <h5>basilxg321@gmail.com</h5>
            <a href="mailto:basilxg321@gmail.com">Send a email</a>
          </article>
          <article className="contact__information">
            <RiMessengerLine className="contact__inforamtion-icon" />
            <h4>Messenger</h4>
            <h5>+91 907 439 7747</h5>
            <a href="https://m.me/iambasilp/">Send a message</a>
          </article>
          <article className="contact__information">
            <BsWhatsapp className="contact__inforamtion-icon" />
            <h4>Email</h4>
            <h5>basilxg321@gmail.com</h5>
            <a href="https://wa.me/919074397747?text=Hello%2C%20Basil%20Pulikuth%20%E2%9C%8B">
              Send a message
            </a>
          </article>
        </div>
        <form action="post"  ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="You Email" required />
          <textarea
            rows="7"
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
