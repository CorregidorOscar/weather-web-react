import React from "react";
import "./App.css";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
// import data, { Cairns } from './data.js';
import { useState, useEffect } from "react";
import { Route } from "react-router";
import About from "./components/About/About";
import Ciudad from "./components/Ciudad/Ciudad";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [cities, setCities] = useState(() => {
    const saved = localStorage.getItem("cities");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);
  function handleAddCity(city) {
    setCities((prev) => {
      return [...prev, city];
    });
  }

  function handleRemoveCity(cityID) {
    setCities((prev) => {
      return prev.filter((c) => c.id !== cityID);
    });
  }
  function onSearch(ciudad) {
    // console.log(apiKey)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&lang=es&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            country: recurso.sys.country,
            weather: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          if (!cities.find((e) => e.id === ciudad.id)) handleAddCity(ciudad);
          else alert("La ciudad ya se encuentra en la lista");
          // handleAddCity(ciudad);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  // function onClose(id) {
  //   setCities(oldCities => oldCities.filter(c => c.id !== id));
  // }
  // onClose(e => (alert('hola')));
  // function onFilter(ciudadId) {
  //   let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
  //   if (ciudad.length > 0) {
  //     return ciudad[0];
  //   } else {
  //     return null;
  //   }
  // }
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      {/* <Nav onSearch={onSearch} /> */}
      <Route path="/about" component={About} />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={handleRemoveCity} />}
      />
      {/* <Route
        exact
        path='/ciudad/:ciudadId'
        render={({ match }) => <Ciudad
          // match.params.ciudadId contiene el id de la ciudad seleccionada en el titulo de Card
          city={onFilter(match.params.ciudadId)}
        />}
      /> */}
      {/* Usando useParams */}
      <Route path="/ciudad/:id" component={Ciudad} />
    </div>
  );
}

export default App;
