import React from 'react';
import Card from '../Card/Card'
import style from './Cards.module.css'

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  if (cities) {
    return (<div className={style.cards}>

      {/* {cities.map((city, index) => {
      return <Card max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
        key={`${city.name}${index}`}>

      </Card>
    })} */}
      {cities.map((c) => (
        <Card
          // key={city.id}
          // min={city.main.temp_min}
          // max={city.main.temp_max}
          // name={city.name}
          // img={city.weather[0].icon}
          // onClose={() => alert(city.name)}
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

    </div>);
  } else {
    return (<div>Sin ciudades</div>)
  }
};