import React from 'react';
import style from './SearchBar.module.css'
import { IoSearchOutline } from 'react-icons/io5'
import { useState } from 'react';
export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city,setCity] = useState({});


  function handleOnSearch(e) {
    e.preventDefault();
    if (typeof onSearch === "function") {
      // const input = document.getElementById("search-bar-input");
      // setCity(onSearch(input.value));
      console.log(city);
      onSearch(city);
    }
  }

  function handleChange(e){
    const c = e.target.value;
    setCity(c);
  }
  return (
    // para usar enter se usa un form
    <form className={style.bar} onSubmit={handleOnSearch}>
      <input placeholder='Ciudad' id="search-bar-input" onChange={handleChange}/>
      <button type= 'submit'>
        <IoSearchOutline/>
      </button>
    </form>
  );
}
// export default function SearchBar({ onSearch }) {
//   // acá va tu código
//   return (<div className={style.bar}>
//     <input type="text" placeholder='Ciudad..' />
//     <button onClick={onSearch}>Agregar</button>
//   </div>)
// };