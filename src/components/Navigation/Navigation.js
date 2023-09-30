import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className={`navigation ${props.isOpen ? 'navigation_opened' : ''} `}>
      <div className="navigation__container">
        <button
          type="button"
          className="navigation__close-btn"
          onClick={props.closeMenuNavigation}
        />
        <nav className="navigation__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? 'navigation__link navigation__link_active'
                  : 'navigation__link'
              }`
            }
            onClick={props.closeMenuNavigation}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `${
                isActive
                  ? 'navigation__link navigation__link_active'
                  : 'navigation__link'
              }`
            }
            onClick={props.closeMenuNavigation}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `${
                isActive
                  ? 'navigation__link navigation__link_active'
                  : 'navigation__link'
              }`
            }
            onClick={props.closeMenuNavigation}
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <button
          type="button"
          className="navigation__profile-btn"
          onClick={props.handleProfileBtnClick}
        >
          Аккаунт
        </button>
      </div>
    </div>
  );
}
export default Navigation;
