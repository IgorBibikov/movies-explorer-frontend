import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as auth from '../../utils/auth';

function Register(props) {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [formValue, setFormValue] = useState({
    email: '',
    name: '',
    password: '',
  });

  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
    setErrorText('');
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    function showRegisterFail() {
      setErrorText('Что-то пошло не так...');
    }

    auth
      .register(formValue.email, formValue.password, formValue.name)
      .then(() => {
        props.showRegisterSucces();
        props.setIsInfoTooltipOpen(true);
      })
      .then(() => {
        setIsValid(false);
      })
      .then(() => {
        navigate('/signin');
      })
      .catch((err) => {
        console.error(`WARNING ${err}`);
        showRegisterFail();
      });
  }

  return (
    <main className="content">
      <section className="sign-up">
        <a href="/" className="logo logo_place_sign-up" />
        <h1 className="sign-up__title">Добро пожаловать!</h1>
        <form
          name="signup"
          className="sign-up__form "
          onSubmit={handleLoginSubmit}
        >
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
                onChange={handleChange}
              />
              <span className="sign-up__input-error">{errors.name}</span>
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
                onChange={handleChange}
              />
              <span className="sign-up__input-error">{errors.email}</span>
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
                minLength={6}
                maxLength={40}
                placeholder="Пароль"
                required
                onChange={handleChange}
              />
              <span className="sign-up__input-error">{errors.password}</span>
            </div>
            <span className="sign-up__register-error">{errorText}</span>
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className="sign-up__submit-button"
          >
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
