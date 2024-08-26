import React, { Fragment, useState } from 'react'
import validator from 'validator'
import { sendEmail } from '../services/serviceWorker';

export default function ContactUs() {
  const initialState = {
    name: '',
    email: '',
    message: '',
    subject: ''
  };
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() === "" || formData.email.trim() === "" || formData.subject.trim() === "" || formData.message.trim() === "") {
      setMsg("Enter all the fields");
      setTimeout(() => {
        setMsg("");
      }, 5000);
      return;
    }

    if (!validator.isEmail(formData.email)) {
      setMsg("Invalid Email");
      setTimeout(() => {
        setMsg("");
      }, 5000);
      return;
    }

    sendEmail(formData)
      .then((response) => {
        setMsg(response.message);
        setTimeout(() => {
          setMsg("");
        }, 5000);
        setFormData(initialState);
      })
      .catch((e) => console.log(e.message));
  }

  return (
    <Fragment>
      <section className='contact_page page'>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10092.245476306814!2d76.98117310739926!3d11.088547754540611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f792636f82b5%3A0xdc86449e9fb48675!2sKGiSL%20Institute%20of%20Technology%20(Autonomous)!5e0!3m2!1sen!2sin!4v1724661685107!5m2!1sen!2sin" style={{ border: 0 }} loading="lazy"></iframe>
        </div>
        <div className="mail">
          <h4 className='title'>Contact Us</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            {
              (msg.trim() !== "") ? <h1 className="msg">{msg}</h1> : null
            }
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              autoComplete="off"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter the subject"
              autoComplete="off"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
            />
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              autoComplete="off"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
            ></textarea>
            <input type="submit" value="Send" onClick={(e) => handleSubmit(e)} className='btn'
            />
          </form>
        </div>
      </section>
    </Fragment>
  )
}
