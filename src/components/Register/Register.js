import { Link, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import * as auth from '../../utils/auth';
import { EMAIL_REGEX } from '../../utils/constants';

function Register(props) {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [formValue, setFormValue] = useState({
    email: '',
    name: '',
    password: '',
  });

  function isValidEmail(value) {
    return EMAIL_REGEX.test(value);
  }
  const navigate = useNavigate();

  function handleEmailChange(e) {
    const { name, value } = e.target;

    if (name === 'email' && !isValidEmail(value)) {
      if (!e.target.validationMessage) {
        setErrors({ ...errors, email: 'Введите email по форме: name@mail.ru' });
      } else {
        setErrors({ ...errors, email: e.target.validationMessage });
      }
    } else {
      setErrors({ ...errors, email: '' });
    }

    setFormValue({ ...formValue, [name]: value });
    setErrorText('');
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setErrorText('');
  }
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setFormValue(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setFormValue, setErrors, setIsValid]
  );

  useEffect(() => {
    if (errors.email || errors.name || errors.password || !formValue.password) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setErrorText('');
  }, [errors]);
  function handleLoginSubmit(e) {
    e.preventDefault();
    function showRegisterFail() {
      setErrorText('Что-то пошло не так...');
    }
    auth
      .register(formValue.email, formValue.password, formValue.name)
      .then((res) => {
        if (res) {
          props.setIsLoggedIn(false);
          auth
            .authorize(formValue.email, formValue.password)
            .then(() => {
              props.showRegisterSucces();
              props.setIsInfoTooltipOpen(true);
              setIsValid(false);
              props.setIsLoggedIn(true);
              navigate('/movies');
              resetForm();
            })
            .catch((err) => {
              console.error(`WARNING ${err}`);
            });
        }
      })
      // .then(() => {
      //   props.showRegisterSucces();
      //   props.setIsInfoTooltipOpen(true);
      // })
      // .then(() => {
      //   auth.authorize(formValue.email, formValue.password);
      // })
      // .then(() => {
      //   setIsValid(false);
      //   props.setIsLoggedIn(true);
      // })
      // .then(() => {
      //   navigate('/movies');
      // })
      .catch((err) => {
        console.error(`WARNING ${err}`);
        showRegisterFail();
      });
  }

  return (
    <main className="content">
      <section className="sign-up">
        <Link to="/" className="logo logo_place_sign-up" />
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
                onChange={handleEmailChange}
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
