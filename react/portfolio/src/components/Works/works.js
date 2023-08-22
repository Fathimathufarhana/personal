import React from 'react'
import "./works.css"
import apiMeal from "../../assets/apiMeals.png"
import apiSearch from "../../assets/apiSearch.png"
import navbar from "../../assets/navbar.png"
import netflix from "../../assets/netflix.png"
import jonDoe from "../../assets/jonDoe.png"
import devkit from "../../assets/devkit.png"

const Works = () => {
  return (
   <section id="works">
<h2 className='worksTitle'>My Projects</h2>
<span className="workDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ducimus cupiditate, et alias neque mollitia.</span>
<div className="worksImgs">

<img src={apiMeal} alt="" className="workImg" />
<img src={apiSearch} alt="" className="workImg" />
<img src={navbar} alt="" className="workImg" />
<img src={netflix} alt="" className="workImg" />
<img src={jonDoe} alt="" className="workImg" />
<img src={devkit} alt="" className="workImg" />

</div>
<button className="worksBtn">See More</button>
   </section>
  )
}

export default Works