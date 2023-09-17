import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

function Profile(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  }
  return (
    <main className="content">
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form name="edit-profile" className="profile__form ">
          <div className="profile__form-container">
            <div className="profile__input-container">
              <label for="name" className="profile__label">
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
              <label for="email" className="profile__label">
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
              <Link to="/" className="profile__link">
                Выйти из аккаунта
              </Link>
            </div>
          ) : (
            <div className="profile__form-container">
              <span className="profile__input-error">
                При обновлении профиля произошла ошибка.
              </span>
              <button
                type="submit"
                className="profile__submit-button"
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
