import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import platesImg from '../../assets/slider/plates.jpg';
import metalImg from '../../assets/slider/metal.jpg';
import slatImg from '../../assets/slider/slat.jpg';
import gridImg from '../../assets/slider/grid.jpg';
import './Slider.scss';


const Slider = () => {
  const sliders = [
    {
      id: 1,
      header: "Потолочные панели",
      value: "В наличии и под заказ большой ассортимент плит из минрального волокна",
      img: platesImg
    },
    {
      id: 2,
      header: "Металлокассеты",
      value: "Широкий выбор металлических кассет, в том числе и для медучреждений",
      img: metalImg
    },
    {
      id: 3,
      header: "Потолок грильято",
      value: "Потолки грильято разных цветов и модификаций в наличии и под заказ",
      img: slatImg
    },
    {
      id: 4,
      header: "Реечные потолки",
      value: "Современное решение для офисов и бутиков - реечные и кубообразные потолки",
      img: gridImg
    },

  ]

  return (
    <Carousel className="slider">
      {sliders.map(slide => {
        return (
          <Carousel.Item className="slider__item" key={slide.id}>
            <img
              className="d-block w-100"
              src={slide.img}
              alt={slide.header}
            />
            <Carousel.Caption>
              <h3>{slide.header}</h3>
              <p>{slide.value}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default Slider;
