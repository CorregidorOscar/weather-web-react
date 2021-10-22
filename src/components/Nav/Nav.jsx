import Logo from '../../img/logoHenry.png';
// import logo from '/src/HenryLogo.jpg'
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'

export default function Nav({onSearch}) {
  return (
    <div className= {style.nav}>
      <div className={style.logTitle}>
      <img src={Logo} alt="img-logo" />
    <span>Henry - Weather App</span>
    </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};
