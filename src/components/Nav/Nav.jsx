import Logo from '../../img/ghostSinFondo2.png'
// import logo from '/src/HenryLogo.jpg'
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'
import { NavLink, Link } from 'react-router-dom';

export default function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <Link to='/' className={style.navLink}>
        <span className={style.logTitle}>
          <img src={Logo} alt="img-logo" />
          Weather App
        </span>
      </Link>
      <NavLink to='/about' className={style.navLink}>
        <span>
          About
        </span>
      </NavLink>
      <SearchBar onSearch={onSearch} />

    </div>
  );
};
