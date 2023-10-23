import React from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="logo logo_place_header" />
      {props.isLoggedIn ? (
        <>
          <nav className="navbar navbar_type_auth">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'navbar__link navbar__link_type_auth navbar__link_active'
                    : 'navbar__link navbar__link_type_auth'
                }`
              }
            >
              Фильмы
            </NavLink>

            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'navbar__link navbar__link_type_auth navbar__link_active'
                    : 'navbar__link navbar__link_type_auth'
                }`
              }
            >
              Сохраненные фильмы
            </NavLink>
          </nav>
          <button
            type="button"
            className="header__profile-btn"
            onClick={props.handlePrfileBtnClick}
          >
            Аккаунт
          </button>
          <button
            type="button"
            className="header__menu-btn"
            onClick={props.handleBurgerButtonClick}
          ></button>
        </>
      ) : (
        <nav className="navbar navbar_type_not-auth">
          <Link
            to="/signup"
            className="navbar__link navbar__link_type_not-auth"
          >
            Регистрация
          </Link>
          <button
            type="button"
            className="navbar__signup-btn"
            onClick={() => {
              navigate('/signin');
            }}
          >
            Войти
          </button>
        </nav>
      )}
    </header>
  );
}
export default Header;
