import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as auth from '../../utils/auth';
import { api } from '../../utils/MainApi';

function App() {
  const [isMenuNavigationOpen, setIsMenuNavigationOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [title, setTitle] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  function showRegisterSucces() {
    setTitle('Вы успешно зарегистрировались!');
  }
  function showEditSucces() {
    setTitle('Данные изменены!');
  }

  function checkToken() {
    auth
      .getContent()
      .then((data) => {
        if (!data) {
          return;
        }
        setUserData(data);
        setIsLoggedIn(true);
        navigate('/');
      })

      .catch((err) => {
        setIsLoggedIn(false);
        setUserData({});
        console.error(`WARNING ${err}`);
      });
  }
  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        api
          .getMovies()
          .then((res) => {
            setSavedMovies(res);
          })
          .catch((err) => {
            console.error(`WARNING ${err}`);
          }),
        api
          .getProfileData()
          .then((res) => {
            setCurrentUser(res);
          })
          .catch((err) => {
            console.error(`WARNING ${err}`);
          }),
      ]);
    }
  }, [isLoggedIn]);

  function handleDeleteMovie(deletMovie) {
    api
      .removeMovie(deletMovie._id)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== deletMovie._id;
          })
        );
      })
      .catch((err) => {
        console.error(`WARNING ${err}`);
      });
    console.log('Удалено');
  }

  function handleAddNewMovie(newMovie) {
    const isAdd = savedMovies.some((el) => newMovie.id === el.movieId);
    const searchMovie = savedMovies.filter((movie) => {
      return movie.movieId === newMovie.id;
    });
    if (isAdd) {
      handleDeleteMovie(searchMovie[0]);
    } else {
      api
        .createNewMovie(newMovie)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => {
          console.error(`WARNING ${err}`);
        });
    }
  }
  function handleBurgerButtonClick() {
    setIsMenuNavigationOpen(true);
  }
  function closeMenuNavigation() {
    setIsMenuNavigationOpen(false);
  }
  function handleBurgerButtonClick() {
    setIsMenuNavigationOpen(true);
  }
  function handleProfileBtnClick() {
    navigate('/profile');
    closeMenuNavigation();
  }
  function handleEditProfile() {
    setIsEditProfile(true);
  }
  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          {['/', '/movies', '/saved-movies', '/profile'].includes(
            location.pathname
          ) && (
            <Header
              isLoggedIn={isLoggedIn}
              handleBurgerButtonClick={handleBurgerButtonClick}
              isMenuPNavigationOpen={isMenuNavigationOpen}
              handlePrfileBtnClick={handleProfileBtnClick}
            />
          )}
          <Routes>
            <Route path="/" element={<Main />} isLoggedIn={isLoggedIn} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  addNewMovie={handleAddNewMovie}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  removeMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isEditProfile={isEditProfile}
                  handleEditProfile={handleEditProfile}
                  setIsLoggedIn={setIsLoggedIn}
                  setUserData={setUserData}
                  isLoggedIn={isLoggedIn}
                  setCurrentUser={setCurrentUser}
                  setIsInfoTooltipOpen={setIsInfoTooltipOpen}
                  showEditSucces={showEditSucces}
                />
              }
            />
            <Route path="/*" element={<NotFound isLoggedIn={isLoggedIn} />} />
            <Route
              path="/signup"
              element={
                <Register
                  showRegisterSucces={showRegisterSucces}
                  setIsInfoTooltipOpen={setIsInfoTooltipOpen}
                />
              }
            ></Route>
            <Route
              path="/signin"
              element={<Login handleLogin={setIsLoggedIn} />}
            />
          </Routes>

          <Navigation
            isOpen={isMenuNavigationOpen}
            closeMenuNavigation={closeMenuNavigation}
            handleProfileBtnClick={handleProfileBtnClick}
          />
          {['/', '/movies', '/saved-movies'].includes(location.pathname) && (
            <Footer />
          )}
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closePopup}
            title={title}
          ></InfoTooltip>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
