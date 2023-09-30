import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </main>
  );
}
export default SavedMovies;
