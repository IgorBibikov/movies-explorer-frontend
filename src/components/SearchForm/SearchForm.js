import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section>
      <form name="search-form" className="search-form">
        <div className="search-form__container">
          <input
            className="search-form__input"
            type="text"
            name="search-form"
            id="search-form"
            placeholder="Фильм"
            required
          />
          <button type="submit" className="search-form__submit-btn"></button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}
export default SearchForm;
