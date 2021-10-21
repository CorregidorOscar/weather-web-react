import React from 'react';
import style from './SearchBar/SearchBar.module.css'
import { IoSearchOutline } from 'react-icons/io5'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  function handleOnSearch() {
    if (typeof onSearch === "function") {
      const input = document.getElementById("search-bar-input");
      onSearch(input.value);
    }
  }

  return (
    <div className={style.bar}>
      <input placeholder='Ciudad' id="search-bar-input" />
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