import React, { useRef } from 'react'
import "./contact.css"
import Linkedin from "../../assets/linkedin-icon.png"
import Github from "../../assets/github-icon.png"
import Hackerrank from "../../assets/hackerrank.jpg"
import emailjs from '@emailjs/browser';
// import walmart from "../../assets/walmart.png"
// import adobe from "../../assets/adobe.png"
// import facebook from "../../assets/facebook.png"
// import microsoft from "../../assets/microsoft.png"


const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l8esvu7', 'template_ajje98q', form.current, 'h73ferIo8Rv5PtgOR')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email send!!!')
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contactPage">
      {/* 
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clienDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dicta!</p>
        <div className="clientImgs">

          <img src={walmart} alt="client" className="clientImg" />
          <img src={adobe} alt="client" className="clientImg" />
          <img src={facebook} alt="client" className="clientImg" />
          <img src={microsoft} alt="client" className="clientImg" />


        </div>
      </div> */}



      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, mollitia?</span>
        <form className="contactForm"
          ref={form}
          onSubmit={sendEmail}
        >
          <input type="text" className="name" placeholder='Your Name' name='your_name' />
          <input type="email" className="email" placeholder='Your Email' name='your_email' />
          <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
          <button type="submit" value='Send' className="submitBtn">Submit</button>
          <div className="links">
            <a href='https://www.linkedin.com/in/fathimathu-farhana-528b35264/'> <img src={Linkedin} alt="linkedin" className="link" /> </a>
            <a href='https://github.com/Fathimathufarhana'> <img src={Github} alt="github" className="link" /></a>
            <a href='https://www.hackerrank.com/fathimathufarha1'> <img src={Hackerrank} alt="hackerrank" className="link" /></a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact