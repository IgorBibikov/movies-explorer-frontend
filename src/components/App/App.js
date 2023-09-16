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

function App() {
  const [isMenuNavigationOpen, setIsMenuNavigationOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isEditProfile, setIsEditProfile] = useState(false);

  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
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

  return (
    <CurrentUserContext.Provider>
      <div className="body">
        <div className="page">
          <Header
            isLoggedIn={isLoggedIn}
            handleBurgerButtonClick={handleBurgerButtonClick}
            isMenuPNavigationOpen={isMenuNavigationOpen}
            handlePrfileBtnClick={handleProfileBtnClick}
          />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route
              path="/profile"
              element={
                <Profile
                  isEditProfile={isEditProfile}
                  handleEditProfile={handleEditProfile}
                />
              }
            />
            <Route path="/*" element={<NotFound isLoggedIn={isLoggedIn} />} />
            <Route path="/signup" element={<Register />}></Route>
            <Route path="/signin" element={<Login />} />
            {/* <Route
              render={({ location }) =>
                location.pathname !== '/cabinet' && <Footer />
              }
            /> */}
          </Routes>

          <Navigation
            isOpen={isMenuNavigationOpen}
            closeMenuNavigation={closeMenuNavigation}
            handleProfileBtnClick={handleProfileBtnClick}
          />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
