import Button from "../utils/Button/Button.jsx";
import Logo from '../../assets/Logo.png'
import './header.css'

const Header = () => {
    return (
        <div className="header-content">
            <div className="header-logo">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="header-links">
                <ul>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Преимущества</a></li>
                </ul>
            </div>
            <div className="header-button">
                <Button text="Узнать стоимость"/>
            </div>
        </div>
    );
};

export default Header;