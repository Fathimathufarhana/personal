import React from 'react'
import "./skills.css"
import WebDesign from "../../assets/website-design.png"

const Skills = () => {
  return (
      <section id='skills'>
        <span className='skillTitle'>What i Do</span>
        <span className='skillDescription'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt natus quod quos sit quam illo aut at? Perferendis, ipsum numquam.</span>
     <div className="skillBars">
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Application development</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae est veniam laudantium, amet eaque qui totam praesentium voluptas error.</p>
            </div>
        </div>
     </div>
      </section>
  )
}

export default Skills