import React from 'react'
import "./skills.css"
import WebDesign from "../../assets/website-design.png"

const Skills = () => {
  return (
<>
      <section id='skills'>
        <span className='skillTitle'>What i Do</span>
        <span className='skillDescription'>As a MERN stack developer,I'm responsible for both the frontend and backend development of web applications, using technologies like MongoDB, Express.js, React, and Node.js to create dynamic and user-friendly experiences for users. </span>
     <div className="skillBars">
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Application development</h2><br/>
                <p>Web application development follows a systematic process from conceptualization through design, development, testing, deployment, and ongoing maintenance. Each step contributes to creating a functional, user-friendly, and secure web application that meets the needs of its intended users.</p>
            </div>
        </div>
     </div>
      </section>
      </>
  )
}

export default Skills