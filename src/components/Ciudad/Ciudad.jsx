import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Ciudad.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;
export default function Ciudad() {
  const [city, setCity] = useState(undefined);
  // useParams para obtner el id desde la url
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&lang=es&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        console.log(recurso);
        if (recurso.main !== undefined) {
          const ciudad = {
            min: recurso.main.temp_min,
            max: recurso.main.temp_max,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            pressure: recurso.main.pressure,
            feels_like: recurso.main.feels_like,
            humidity: recurso.main.humidity,
            name: recurso.name,
            country: recurso.sys.country,
            weather: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCity(ciudad);
          // handleAddCity(ciudad);
        } else {
          setCity(null);
        }
      });
  }, [id]);
  return (
    <>
      {city === undefined && <h1 className={styles.titulo}>Cargando...</h1>}
      {city === null && <h1 className={styles.titulo}>Ciudad no encontrada</h1>}
      {city && (
        <div className={styles.ciudad}>
          <div className={styles.contenedor}>
            <h2 className={styles.titulo}>{`${city.name}, ${city.country}`}</h2>
            <div className={styles.info}>
              <div>Temperatura: {city.temp} ºC</div>
              <div>Sensación Termica: {city.feels_like} ºC</div>
              <div>Clima: {city.weather}</div>
              <div>Viento: {city.wind} km/h</div>
              <div>Presión: {city.pressure} hPa</div>
              <div>Cantidad de nubes: {city.clouds} %</div>
              <div>Humedad: {city.humidity} %</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
  // return (
  //     <div className="ciudad">
  //         <div className="container">
  //             <h2>{`${city.name}, ${city.country}`}</h2>
  //             <div className="info">
  //                 <div>Temperatura: {city.temp} ºC</div>
  //                 <div>Clima: {city.weather}</div>
  //                 <div>Viento: {city.wind} km/h</div>
  //                 <div>Cantidad de nubes: {city.clouds}</div>
  //                 <div>Latitud: {city.latitud}º</div>
  //                 <div>Longitud: {city.longitud}º</div>
  //             </div>
  //         </div>
  //     </div>
  // )
}
