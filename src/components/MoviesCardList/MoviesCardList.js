import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import {
  SCREEN_L,
  SCREEN_M,
  SCREEN_S,
  INITIAL_L,
  INITIAL_M,
  INITIAL_S,
  STEP_L,
  STEP_M,
  STEP_S,
} from '../../utils/constants';

function MoviesCardList({
  movies,
  filteredMovies,
  isLoading,
  savedMovies,
  serverError,
  addNewMovie,
  removeMovie,
}) {
  const location = useLocation();
  const [count, setCount] = useState('');
  const shownMovies = filteredMovies?.slice(0, count);

  function showCards() {
    const counter = { initialCards: INITIAL_L, stepCards: STEP_L };
    if (window.innerWidth < SCREEN_L) {
      counter.initialCards = INITIAL_L;
      counter.stepCards = STEP_L;
    }
    if (window.innerWidth < SCREEN_M) {
      counter.initialCards = INITIAL_M;
      counter.stepCards = STEP_M;
    }
    if (window.innerWidth < SCREEN_S) {
      counter.initialCards = INITIAL_S;
      counter.stepCards = STEP_S;
    }
    return counter;
  }

  function handleMoreButtonClick() {
    setCount(count + showCards().stepCards);
  }

  useEffect(() => {
    if (location.pathname === '/movies') {
      setCount(showCards().initialCards);
      function showCardsForResize() {
        if (window.innerWidth >= SCREEN_L) {
          setCount(showCards().initialCards);
        }
        if (window.innerWidth < SCREEN_L) {
          setCount(showCards().initialCards);
        }
        if (window.innerWidth < SCREEN_M) {
          setCount(showCards().initialCards);
        }
        if (window.innerWidth < SCREEN_S) {
          setCount(showCards().initialCards);
        }
      }
      window.addEventListener('resize', showCardsForResize);
      return () => {
        window.removeEventListener('resize', showCardsForResize);
      };
    }
  }, [location.pathname]);

  return (
    <section className="movies-cards">
      <div className="movies-cards__container">
        {isLoading ? (
          <Preloader />
        ) : location.pathname === '/movies' && shownMovies.length !== 0 ? (
          shownMovies.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id}
                savedMovies={savedMovies}
                addNewMovie={addNewMovie}
              ></MoviesCard>
            );
          })
        ) : filteredMovies?.length !== 0 ? (
          filteredMovies?.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie._id}
                removeMovie={removeMovie}
              ></MoviesCard>
            );
          })
        ) : serverError ? (
          <span className="movies-cards__search-error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </span>
        ) : localStorage.movies ? (
          <span className="movies-cards__search-error">Ничего не найдено</span>
        ) : null}
      </div>
      {location.pathname === '/movies' ? (
        <button
          type="button"
          className="movies__btn"
          onClick={handleMoreButtonClick}
        >
          Еще
        </button>
      ) : null}
    </section>
  );
}
export default MoviesCardList;
