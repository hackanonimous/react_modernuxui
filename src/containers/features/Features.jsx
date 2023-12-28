import React from 'react'
import {Feature} from "../../components"
import "./features.css"

const featureData=[
  {
    title:"Improving and distrusts instantly",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quaerat consequatur blanditiis harum. Laudantium blanditiis assumenda, cumque veritatis voluptatibus excepturi dignissimos distinctio dolore temporibus molestiae, rem non beatae qui ducimus."
  },
  {
    title:"Become the tended active",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quaerat consequatur blanditiis harum. Laudantium blanditiis assumenda, cumque veritatis voluptatibus excepturi dignissimos distinctio dolore temporibus molestiae, rem non beatae qui ducimus."
  },
  {
    title:"Message or am nothing",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quaerat consequatur blanditiis harum. Laudantium blanditiis assumenda, cumque veritatis voluptatibus excepturi dignissimos distinctio dolore temporibus molestiae, rem non beatae qui ducimus."
  },{
    title:"Really boy law country",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quaerat consequatur blanditiis harum. Laudantium blanditiis assumenda, cumque veritatis voluptatibus excepturi dignissimos distinctio dolore temporibus molestiae, rem non beatae qui ducimus."
  }
]

function Features() {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>El futuro esta en tus manos depende de ti. realizarlo</h1>
        <p>Requiere acceso para comenzar</p>
      </div>
      <div className='gpt3__features-container'>
        {featureData.map((data,index)=>(
          <Feature key={data.title + index} title={data.title} text={data.text}/>
        ))}
      </div>
    </div>
  )
}

export default Features