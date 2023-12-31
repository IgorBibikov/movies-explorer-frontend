import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

function Register(props) {
  return (
    <main className="content">
      <section className="sign-up">
        <a href="/" className="logo logo_place_sign-up" />
        <h1 className="sign-up__title">Добро пожаловать!</h1>
        <form name="signup" className="sign-up__form ">
          <div className="sign-up__form-container">
            <div className="sign-up__input-container">
              <label htmlFor="name" className="sign-up__label">
                Имя
              </label>
              <input
                className="sign-up__input sign-up__input_type_name"
                type="text"
                name="name"
                id="name"
                minLength={2}
                maxLength={40}
                placeholder="Имя"
                required
              />
            </div>
            <div className="sign-up__input-container">
              <label htmlFor="email" className="sign-up__label">
                E-mail
              </label>
              <input
                className="sign-up__input sign-up__input_type_email"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="sign-up__input-container">
              <label htmlFor="password" className="sign-up__label">
                Пароль
              </label>
              <input
                className="sign-up__input sign-up__input_type_password"
                type="password"
                name="password"
                id="password"
                minLength={3}
                maxLength={40}
                placeholder="Пароль"
                required
              />
            </div>
            <span className="sign-up__input-error">Что-то пошло не так...</span>
          </div>
          <button type="submit" className="sign-up__submit-button">
            Зарегистрироваться
          </button>
          <p className="sign-up__subtitle">
            Уже зарегистрированы?
            <Link to="/signin" className="sign-up__link">
              Войти
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
export default Register;
