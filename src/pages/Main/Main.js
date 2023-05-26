import React from 'react';
import Slider from '../../components/Slider/Slider';
import './Main.scss';
import { useSelector } from 'react-redux';
import { selectLeaders } from '../../slices/leadersSlice';
import chooseImg from '../../assets/choose/choose.png';
import CardItem from '../../components/CardItem/CardItem';

const Main = () => {
  const leaders = useSelector(selectLeaders);
  return (
    <main>
      <section className='section-slider'>
        <div className="wrapper">
          <Slider />
        </div> 
      </section>
      <section className='leaders'>
        <div className="wrapper">
        <div className="leaders__title title-section">
          <h2 className="title-section__title">Лидеры продаж</h2>
        </div>
          <div className="leaders__row">
              {leaders.map(leader => {
                return (
                  <CardItem item={leader}/>
                )
              })}
          </div>
        </div>
      </section>
      <section className="choose">
        <div className="wrapper">
          <div className="choose__title title-section">
            <h2 className="title-section__title">Как выбрать потолок</h2>
          </div>
          <div className="choose__row">
            <div className="choose__img">
              <img src={chooseImg} alt="Как выбрать потолок Армстронг" />
            </div>
            <article className="choose__article">
              <p>
                Прежде чем приступить к выбору потолочной конструкции, следует ознакомиться с 
                проектной документацией, то есть выяснить, в каких помещениях будет монтироваться 
                конструкция и какие требования предъявляются к потолку. Если монтаж потолка Армстронг 
                предстоит выполнить в помещениях с нормальной относительной влажностью воздуха и 
                где нет особенных требований к потолочной конструкции - то выбор вполне может пасть 
                на такие продукты из минерального волокна как Bajkal, Retail в кромках board или tegular, 
                Oasis, Scala, Dune Supreme в кромках board, tegular или microlook и другие продукты. 
                Если же к потолку применяется требование НГ, то в линейке продукции компании Армстронг 
                существуют несколько продуктов, удовлетворяющих данному требованию, например: Retail NG, 
                Dune NG, Ceramaguard или Newtone. Также компания Армстронг может предложить потолки для 
                детских дошкольных и медицинских учреждений с бактерицидным покрытием препятствующих 
                распространению различных штаммов бактерий и плиты с повышенной износостойкостью к мытью. 
                Помимо этого, налажено производство металлических бесшовных потолочных конструкций для 
                операционных комнат. Отдельного внимания заслуживают плиты с высоким коэффициентом 
                звукопоглощения и повышенной шумоизоляцией. Такие плиты будут востребованы в помещениях 
                с большим скоплением людей, таких как холлы или в офисных помещениях, где необходимо 
                соблюдать конфиденциальность переговорного процесса.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main;
