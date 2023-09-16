import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <section className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </section>
  );
}
export default SavedMovies;
