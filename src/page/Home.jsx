import React from 'react'
import { Carousel } from 'react-bootstrap'
import t from '../../src/components/css/Home.module.css'
const Home = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://st-1.akipress.org/st_gallery/84/921684.8702403877a0c041a7c9542f83ec9af2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>КОК БОРУ БОЛЬШЕ ЧЕМ ИГРА
         </h3>
     <li>
       ИГРУ КОК БОРУ ДОЛЖНЫ НЕ ТОЛЬКО КЫРГЫЗСТАН,КОК БОРУ ДОЛНЫ ЗНАТЬ ВО ВСЕМ В МИРЕ

     </li>
     <li>
       Индивидуальный подход
     </li>
     <li>
       Погружение в языковую среду
     </li>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://kabar.kg/site/assets/files/40580/img_0916.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>DIXI (Латынь) </h3>
     <h1>
       Я ВСЕ СКАЗАЛ ДОБАВИТЬ НЕЧЕГО!
     </h1>
     <p>
       Используется в смысле:Я сказал,что нужно было сказать и я уверен в своих аргументах.
     </p>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://sport.kg/uploads/posts/2018-09/1536555295_kok-boru-kochevniki.jpg"
      alt="third slide"
    />

    <Carousel.Caption>
      <h3>БУДЬ В СЕРДЦЕ ОБЩЕНИЕ В МЕСТЕ С ADIXI </h3>
     
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

    </div>
  )
}

export default Home


