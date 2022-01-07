import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  if (cities.length) {
    return (
      <div className={style.cards}>
        {cities.map((c) => (
          <Card
            max={c.max}
            temp={c.temp}
            min={c.min}
            name={c.name}
            country={c.country}
            img={c.img}
            onClose={() => onClose(c.id)}
            key={c.id}
            id={c.id}
          />
        ))}
      </div>
    );
  } else {
    return <h1 className={style.sinCiudades}>Sin ciudades</h1>;
  }
}
