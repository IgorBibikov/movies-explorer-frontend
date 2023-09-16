import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

function Login(props) {
  return (
    <main>
      <section className="sign-in">
        <a href="/" className="logo logo_place_sign-in" />
        <h2 className="sign-in__title">Рады видеть!</h2>
        <form name="signin" className="sign-in__form ">
          <div className="sign-in__form-container">
            <div className="sign-in__input-container">
              <label for="email" className="sign-in__label">
                E-mail
              </label>
              <input
                className="sign-in__input sign-in__input_type_email"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="sign-in__input-container">
              <label for="password" className="sign-in__label">
                Пароль
              </label>
              <input
                className="sign-in__input sign-in__input_type_password"
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
                required
              />
            </div>
            <span className="sign-in__input-error"></span>
          </div>
          <button type="submit" className="sign-in__submit-button">
            Войти
          </button>
          <p className="sign-in__subtitle">
            Ещё не зарегистрированы?
            <Link to="/signup" className="sign-in__link">
              Регистрация
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
export default Login;
