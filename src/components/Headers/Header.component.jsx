import logo from '../../utils/assets/Logo.png';
import style from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div>
                <ul className={style.navBar}>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
