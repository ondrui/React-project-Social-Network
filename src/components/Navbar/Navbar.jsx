import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/users' activeClassName={style.activeLink}>Users</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/news' activeClassName={style.activeLink}>News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/setting' activeClassName={style.activeLink}>Settings</NavLink>
      </div>
      <Friends state={props.state}/>
    </nav>
  );
}

export default Navbar;
