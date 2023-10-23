import { Link, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import * as auth from '../../utils/auth';
import { EMAIL_REGEX } from '../../utils/constants';

function Login(props) {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function isValidEmail(value) {
    return EMAIL_REGEX.test(value);
  }
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
  useEffect(() => {
    if (errors.email || errors.password || !formValue.password) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setErrorText('');
  }, [errors]);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setFormValue(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setFormValue, setErrors, setIsValid]
  );

  function handleLoginSubmit(e) {
    e.preventDefault();
    function showRegisterFail() {
      setErrorText('Что-то пошло не так...');
    }
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {})
      .then(() => {
        setIsValid(false);
      })
      .then(() => {
        props.handleLogin(true);
        navigate('/movies');
        resetForm();
      })
      .catch((err) => {
        showRegisterFail();
        console.error(`WARNING ${err}`);
      });
  }
  return (
    <main className="content">
      <section className="sign-in">
        <Link to="/" className="logo logo_place_sign-in" />
        <h1 className="sign-in__title">Рады видеть!</h1>
        <form
          name="signin"
          className="sign-in__form "
          onSubmit={handleLoginSubmit}
        >
          <div className="sign-in__form-container">
            <div className="sign-in__input-container">
              <label htmlFor="email" className="sign-in__label">
                E-mail
              </label>
              <input
                className="sign-in__input sign-in__input_type_email"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
                onChange={handleEmailChange}
              />
              <span className="sign-in__input-error">{errors.email}</span>
            </div>
            <div className="sign-in__input-container">
              <label htmlFor="password" className="sign-in__label">
                Пароль
              </label>
              <input
                className="sign-in__input sign-in__input_type_password"
                type="password"
                name="password"
                id="password"
                minLength={6}
                maxLength={40}
                placeholder="Пароль"
                required
                onChange={handleChange}
              />
              <span className="sign-in__input-error">{errors.password}</span>
            </div>
            <span className="sign-in__login-error">{errorText}</span>
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className="sign-in__submit-button"
          >
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
