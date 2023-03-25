import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'menu__item menu__item-active' : 'menu__item'
                }
            >
                Главная
            </NavLink>
            <NavLink
                to="/drift"
                className={({ isActive }) =>
                    isActive ? 'menu__item menu__item-active' : 'menu__item'
                }
            >
                Дрифт-такси
            </NavLink>
            <NavLink
                to="/timeattack"
                className={({ isActive }) =>
                    isActive ? 'menu__item menu__item-active' : 'menu__item'
                }
            >
                Time Attack
            </NavLink>
            <NavLink
                to="/forza"
                className={({ isActive }) =>
                    isActive ? 'menu__item menu__item-active' : 'menu__item'
                }
            >
                Forza Karting
            </NavLink>
        </div>
    );
}

export default Menu;
