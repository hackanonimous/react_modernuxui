import React from 'react'
import possibility from "../../assets/possibility.png"
import "./possibility.css"

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibility are bayond your imagination</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quaerat consequatur blanditiis harum. Laudantium blanditiis assumenda, cumque veritatis voluptatibus excepturi dignissimos distinctio dolore temporibus molestiae, rem non beatae qui ducimus.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility