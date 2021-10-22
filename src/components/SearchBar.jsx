import React from 'react';
import style from './SearchBar/SearchBar.module.css'
import { IoSearchOutline } from 'react-icons/io5'
import { useState } from 'react';
export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city,setCity] = useState({});


  function handleOnSearch(e) {
    if (typeof onSearch === "function") {
      // const input = document.getElementById("search-bar-input");
      // setCity(onSearch(input.value));
      onSearch(city);
    }
  }

  function handleChange(e){
    const c = e.target.value;
    setCity(c);
  }
  return (
    <div className={style.bar}>
      <input placeholder='Ciudad' id="search-bar-input" onChange={handleChange}/>
      <button onClick={handleOnSearch}>
        <IoSearchOutline/>
      </button>
    </div>
  );
}
// export default function SearchBar({ onSearch }) {
//   // acá va tu código
//   return (<div className={style.bar}>
//     <input type="text" placeholder='Ciudad..' />
//     <button onClick={onSearch}>Agregar</button>
//   </div>)
// };