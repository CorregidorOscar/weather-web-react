import React from 'react';
import style from './Card.module.css'
import PropTypes from 'prop-types'
import { IoCloseCircleOutline } from 'react-icons/io5'
import CardTemp from '../CardTemp/CardTemp'
import { NavLink } from 'react-router-dom';
// import Nav from '../Nav/Nav';

export default function Card({ max, min, name, img, onClose, id }) {
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
        <span className={style.city}>{name}</span>
      </NavLink>
      <div className={style.clima}>
        <CardTemp label="Min" value={min} />
        <CardTemp label="Max" value={max} />
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="icono del clima"
          className={style.img}
        />
      </div>
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

// controlor tipo de datos del props
Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};