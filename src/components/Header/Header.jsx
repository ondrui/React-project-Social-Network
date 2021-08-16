import logo from '../../logo.svg';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt='logo' />
    </header>
  );
};

export default Header;
