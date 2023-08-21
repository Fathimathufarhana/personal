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
        <p className="introPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas repellendus ullam deleniti? Assumenda cumque porro quidem accusamus nam dicta ipsam temporibus hic rem fugit in neque obcaecati, odio animi sequi vero voluptas. Laborum iste ipsa culpa accusantium incidunt, voluptatibus sit repellat maxime sed rem reprehenderit quas dolorum voluptatum aspernatur expedita.</p>
        <a href={resume} download><button className="btn"><img src={btnImg} alt="" className='btnimg'/>Download Resume</button></a>

      </div>
      <img src={bg} alt="profile" className="profile" />

     </section>
  )
}

export default Intro;