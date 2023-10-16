import { useCallback, useEffect, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, removeMovie }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [searchQuery, setSearchQuery] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const filterMovies = useCallback((searchQuery, isChecked, movies) => {
    setSearchQuery(searchQuery);
    setFilteredMovies(
      movies.filter((movie) => {
        const nameRU = movie.nameRU.toLowerCase();
        const nameEN = movie.nameEN.toLowerCase();
        const lowerCaseQuery = searchQuery.toLowerCase();
        const serachName =
          nameRU.includes(lowerCaseQuery) || nameEN.includes(lowerCaseQuery);
        return isChecked ? serachName && movie.duration <= 40 : serachName;
      })
    );
  }, []);

  function handleSearchMovies(searchQuery) {
    filterMovies(searchQuery, isChecked, savedMovies);
  }

  useEffect(() => {
    filterMovies(searchQuery, isChecked, savedMovies);
  }, [filterMovies, searchQuery, isChecked, savedMovies]);

  function handleCheckbox() {
    if (isChecked) {
      setIsChecked(false);
      filterMovies(searchQuery, isChecked, savedMovies);
    } else {
      setIsChecked(true);
      filterMovies(searchQuery, isChecked, savedMovies);
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
        savedMovies={savedMovies}
      ></SearchForm>
      <MoviesCardList
        movies={filteredMovies}
        filteredMovies={filteredMovies}
        removeMovie={removeMovie}
        savedMovies={savedMovies}
      ></MoviesCardList>
    </main>
  );
}
export default SavedMovies;
