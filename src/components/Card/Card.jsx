import React from 'react';
import style from './Card.module.css'
import PropTypes from 'prop-types'
import { IoCloseCircleOutline } from 'react-icons/io5'
import CardTemp from '../CardTemp/CardTemp'
import { NavLink } from 'react-router-dom';

export default function Card({ max, temp, min, name, country, img, onClose, id }) {
  // acá va tu código
  function handleOnClose() {
    if (typeof onClose === "function") onClose(id);
  }

  return (

    <div className={style.card}>
      <button className={style.closeBtn} onClick={handleOnClose}>
        <IoCloseCircleOutline />
      </button>
      <NavLink to={`/ciudad/${id}`} className={style.navLink}>
        <span className={style.city}>{`${name}, ${country}`}</span>
      </NavLink>
      <CardTemp label="Min" value={min} />
      <CardTemp label="Actual" value={temp} />
      <CardTemp label="Max" value={max} />
      <img
        src={process.env.PUBLIC_URL + `/${img}.svg`} alt="icono de clima" className={style.img} />
      {/* <img
        src={imagen}
        alt="icono del clima"
        className={style.img}
      /> */}
      {/* <div className={style.closeBtn}>
        <button onClick={onClose}>X</button>
      </div>
      <h3 className={style.city}>{name}</h3>

      <p className={style.min}>Min</p>
      <span className={style.temMin}>{`${min}°`}</span>


      <p className={style.max}>Max</p>
      <span className={style.temMax}>{`${max}°`}</span>

      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='' className={style.imgC} /> */}
    </div>)
};

// cambiar iconos
// function WeatherIcon({ icon }) {
//   const e = require('../../img/01n.svg');
//   switch (icon) {
//     case "01d":
//       return <img src={i01d} alt="shower rain" />;
//     default:
//       return <img src={process.env.PUBLIC_URL + `/${icon}.svg`} alt="icono de clima" />;
//   }
// }
// controlor tipo de datos del props
Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};