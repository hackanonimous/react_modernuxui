import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Soy Jose Alvarez estoy practicando css y front-end Espero me salga bien
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, provident error! Sapiente, quidem qui. Molestias, odio? Error dicta consectetur earum ipsa dolores vero beatae deleniti deserunt, quis minima sunt eligendi?</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Tu Correo Electronico'/>
          <button type="button">Enviar</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>3600 seguidores en todo el mundo y en aumento</p>
        </div>
      </div> 
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header