import React from 'react';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
// import data, { Cairns } from './data.js';
import { useState } from 'react'
import { Route } from 'react-router';
import About from './components/About/About';
import Ciudad from './components/Ciudad/Ciudad';


const API_KEY = process.env.REACT_APP_API_KEY;


function App() {
  const [cities, setCities] = useState([]);

  // function handleAddCity(city) {
  //   setCities((prev) => {
  //     return [...prev, city]
  //   });
  // }

  // function handleRemoveCity(cityID) {
  //   setCities((prev) => {
  //     return prev.filter((c) => {
  //       return c.id !== cityID;
  //     })
  //   });
  // }
  function onSearch(ciudad) {
    // console.log(apiKey)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&lang=es&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            country: recurso.sys.country,
            weather: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if (!cities.find((e) => e.id === ciudad.id)) setCities(oldCities => [...oldCities, ciudad]);
          else alert("La ciudad ya se encuentra en la lista")
          // handleAddCity(ciudad);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    // //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    // //pero de momento agregaremos una ciudad por default para ver que funcione

    // const ciudadEjemplo = {
    //   min: 32,
    //   max: 35,
    //   img: "03n",
    //   id: 2172797,
    //   wind: 3.6,
    //   temp: 300.15,
    //   name: "Cairns",
    //   weather: "Clouds",
    //   clouds: 40,
    //   latitud: -16.92,
    //   longitud: 145.77
    // };
    // setCities(oldCities => [...oldCities, ciudadEjemplo]);
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  // onClose(e => (alert('hola')));
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      {/* <Nav onSearch={onSearch} /> */}
      <Route
        path='/about'
        component={About}
      />
      <Route
        exact path='/'
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route
        exact
        path='/ciudad/:ciudadId'
        render={({ match }) => <Ciudad
          // match.params.ciudadId contiene el id de la ciudad seleccionada en el titulo de Card
          city={onFilter(match.params.ciudadId)}
        />}
      />

    </div>
  );
}

export default App;
