import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form action="#" name="" className="search-form">
      <div className="search-form__container">
        <input
          className="search-form__input"
          type="text"
          name="search-form"
          id="search-form"
          placeholder="Фильм"
        />
        <button type="submit" className="search-form__submit-btn"></button>
      </div>
      <FilterCheckbox />
    </form>
  );
}
export default SearchForm;
