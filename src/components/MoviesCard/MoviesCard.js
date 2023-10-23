import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
function MoviesCard({ movie, savedMovies, addNewMovie, removeMovie }) {
  const location = useLocation();
  const [isSavedMovie, setIsSavedMovie] = useState(false);

  useEffect(() => {
    if (location.pathname === '/movies')
      setIsSavedMovie(savedMovies.some((el) => movie.id === el.movieId));
  }, [savedMovies, movie, setIsSavedMovie, location.pathname]);

  function formattingDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  function handleSaveBtnClick() {
    if (savedMovies.some((el) => movie.id === el.movieId)) {
      setIsSavedMovie(true);
      addNewMovie(movie);
      console.log('ССОХРАНЕНО');
    } else {
      setIsSavedMovie(false);
      console.log('УЖЕ СОЗРА');
      addNewMovie(movie);
    }
  }

  return (
    <article className="movies-card">
      {location.pathname === '/movies' ? (
        !isSavedMovie ? (
          <button
            type="button"
            className="movies-card__save-btn"
            onClick={handleSaveBtnClick}
          >
            Сохранить
          </button>
        ) : (
          <button
            type="button"
            className="movies-card__saved-btn"
            onClick={handleSaveBtnClick}
          ></button>
        )
      ) : (
        <button
          type="button"
          className="movies-card__delete-btn"
          onClick={() => {
            removeMovie(movie);
          }}
        ></button>
      )}

      <Link to={movie.trailerLink} target="_blank">
        {location.pathname === '/movies' ? (
          <img
            className="movies-card__image"
            src={`https://api.nomoreparties.co${movie.image.url}`}
            alt={movie.image.name}
          />
        ) : (
          <img
            className="movies-card__image"
            src={movie.image}
            alt={movie.image.name}
          />
        )}
      </Link>
      <div className="movies-card__group">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__duration">
          {formattingDuration(movie.duration)}
        </p>
      </div>
    </article>
  );
}
export default MoviesCard;
