import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header">
      <a href="/" className="logo logo_place_header" />
      {props.isLoggedIn ? (
        <>
          <nav className="navbar navbar_type_auth">
            <Link to="/movies" className="navbar__link navbar__link_type_auth ">
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className="navbar__link navbar__link_type_auth"
            >
              Сохраненные фильмы
            </Link>
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
