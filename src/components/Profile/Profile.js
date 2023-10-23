import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from '../../utils/MainApi';

function Profile(props) {
  const [errorText, setErrorText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  // / Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
    console.log(e);
  }
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    if (name === currentUser.name && email === currentUser.email) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [handleChangeName, handleChangeEmail]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    function showUpdateFail() {
      setErrorText('При обновлении профиля произошла ошибка.');
    }
    api
      .editProfileData({
        name: name,
        email: email,
      })
      .then((res) => {
        props.setCurrentUser(res.data);
      })
      .then(() => {
        props.showEditSucces();
        props.setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        console.error(`WARNING ${err}`);
        showUpdateFail();
      });
  }

  function signOut() {
    localStorage.clear();
    auth
      .signout()
      .then((data) => {
        console.log(data);
        props.setIsLoggedIn(false);
        props.setUserData({});
        navigate('/');
      })
      .catch((err) => {
        console.error(`WARNING ${err}`);
      });
  }
  return (
    <main className="content">
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form
          name="edit-profile"
          className="profile__form "
          onSubmit={handleSubmit}
        >
          <div className="profile__form-container">
            <div className="profile__input-container">
              <label htmlFor="name" className="profile__label">
                Имя
              </label>
              <input
                className="profile__input profile__input_type_name"
                type="text"
                name="name"
                id="name"
                minLength={2}
                maxLength={40}
                required
                value={name || ''}
                onChange={handleChangeName}
                disabled={!props.isEditProfile}
                placeholder="Имя"
              />
            </div>
            <div className="profile__input-container">
              <label htmlFor="email" className="profile__label">
                E-mail
              </label>
              <input
                className="profile__input profile__input_type_email"
                type="email"
                name="email"
                id="email"
                required
                value={email || ''}
                placeholder="E-mail"
                onChange={handleChangeEmail}
                disabled={!props.isEditProfile}
              />
            </div>
          </div>
          {!props.isEditProfile ? (
            <div className="profile__form-container">
              <button
                type="button"
                className="profile__edit-button"
                onClick={props.handleEditProfile}
              >
                Редактировать
              </button>
              <Link to="/" className="profile__link" onClick={signOut}>
                Выйти из аккаунта
              </Link>
            </div>
          ) : (
            <div className="profile__form-container">
              <span className="profile__input-error">{errorText}</span>
              <button
                type="submit"
                className="profile__submit-button"
                disabled={btnDisabled}
                onSubmit={handleSubmit}
              >
                Сохранить
              </button>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
export default Profile;
