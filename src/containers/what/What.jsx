import React from 'react'
import "./what.css"
import { Feature } from '../../components'

function What() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-features">
        <Feature title="Quien Soy" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, provident error! Sapiente, quidem qui. Molestias, odio? Error dicta consectetur earum ipsa dolores vero beatae deleniti deserunt, quis minima sunt eligendi?"/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>Las posibilidades solo son limitadas por tu imaginacion</h1>
        <p>Explora la libreria</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbot" text="integracion de chatbot en sus comercios"/>
        <Feature title="Otros contenidos" text="muchos contenidos mas por ver en esta seccion para explorar"/>
        <Feature title="Educacion" text="la educacion es importante y aqui publicaremos todo lo relacionada a educacion mediatica"/>
      </div>
    </div>
  )
}

export default What