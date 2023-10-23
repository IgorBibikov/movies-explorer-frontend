import { useCallback, useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getAllMovies from '../../utils/MoviesApi';
import { SHORT_FILM } from '../../utils/constants';

function Movies({ savedMovies, addNewMovie, removeMovie }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const filterMovies = useCallback((searchQuery, isChecked, movies) => {
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('shortMovies', JSON.stringify(isChecked));
    localStorage.setItem('searchQuery', JSON.stringify(searchQuery));

    setSearchQuery(searchQuery);
    setFilteredMovies(
      movies.filter((movie) => {
        const nameRU = movie.nameRU.toLowerCase();
        const nameEN = movie.nameEN.toLowerCase();
        const lowerCaseQuery = searchQuery.toLowerCase();
        const serachName =
          nameRU.includes(lowerCaseQuery) || nameEN.includes(lowerCaseQuery);
        return isChecked
          ? serachName && movie.duration <= SHORT_FILM
          : serachName;
      })
    );
  }, []);

  function handleSearchMovies(searchQuery) {
    if (movies.length === 0) {
      setIsLoading(true);
      getAllMovies()
        .then((res) => {
          setMovies(res);
          setServerError(false);
          filterMovies(searchQuery, isChecked, res);
        })
        .catch((err) => {
          setServerError(true);
          console.error(`WARNING ${err}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filterMovies(searchQuery, isChecked, movies);
    }
  }

  useEffect(() => {
    if (
      localStorage.movies &&
      localStorage.shortMovies &&
      localStorage.searchQuery
    ) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      const shortMovies = JSON.parse(localStorage.getItem('shortMovies'));
      const searchQuery = JSON.parse(localStorage.getItem('searchQuery'));
      setSearchQuery(searchQuery);
      setIsChecked(shortMovies);
      setMovies(movies);
      setServerError(false);
      filterMovies(searchQuery, shortMovies, movies);
    }
  }, [filterMovies]);

  function handleCheckbox() {
    if (isChecked) {
      setIsChecked(false);
      filterMovies(searchQuery, false, movies);
    } else {
      setIsChecked(true);
      filterMovies(searchQuery, true, movies);
    }
  }

  return (
    <main className="movies">
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearchMovies={handleSearchMovies}
        handleCheckbox={handleCheckbox}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      ></SearchForm>
      <MoviesCardList
        movies={movies}
        filteredMovies={filteredMovies}
        removeMovie={removeMovie}
        savedMovies={savedMovies}
        isLoading={isLoading}
        serverError={serverError}
        addNewMovie={addNewMovie}
      ></MoviesCardList>
    </main>
  );
}
export default Movies;
