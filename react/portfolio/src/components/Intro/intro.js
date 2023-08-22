import React from 'react'
import "./intro.css"
import bg from "../../assets/image.png"
import btnImg from "../../assets/hireme.png"
import resume from "../Intro/Fathimathu Farhana.pdf";


const Intro = () => {
  return (
     <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">i'm <span className="introName">Fathimathu Farhana</span><br />Web developer</span>
        <p className="introPara">Aspiring Software Developer with a passion for full-stack web development and a focus on the MERN stack (MongoDB, Express.js, React.js, Node.js). Currently pursuing an internship opportunity to enhance my skills and contribute to dynamic projects in a collaborative environment.</p>
        <a href={resume} download><button className="btn"><img src={btnImg} alt="" className='btnimg'/>Download Resume</button></a>

      </div>
      <img src={bg} alt="profile" className="profile" />

     </section>
  )
}

export default Intro;