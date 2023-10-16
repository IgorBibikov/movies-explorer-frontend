import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const [placeholder, setPlaceholder] = useState('Фильм');

  const {
    searchQuery,
    setSearchQuery,
    handleSearchMovies,
    handleCheckbox,
    isChecked,
    setIsChecked,
    savedMovies,
  } = props;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/saved-movies' && savedMovies.length === 0) {
      setSearchQuery('');
    } else {
      setSearchQuery(searchQuery);
    }
  }, [searchQuery, savedMovies]);

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchQuery === '') {
      setPlaceholder('Необходимо ввести ключевое слово');
    } else {
      handleSearchMovies(searchQuery);
      setPlaceholder('Фильм');
    }
  }
  return (
    <section>
      <form name="search-form" className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__container">
          <input
            className="search-form__input"
            type="text"
            name="search-form"
            id="search-form"
            placeholder={placeholder}
            onChange={handleSearchChange}
            value={searchQuery}
          />
          <button type="submit" className="search-form__submit-btn"></button>
        </div>
        <FilterCheckbox
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleCheckbox={handleCheckbox}
        />
      </form>
    </section>
  );
}
export default SearchForm;
