import React from 'react';
import Card from './Card'
import style from './Cards/Cards.module.css'

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
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
    {cities.map((city) => (
        <Card
          key={city.id}
          min={city.main.temp_min}
          max={city.main.temp_max}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
      ))}

  </div>);
};