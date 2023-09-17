import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <button type="button" className="movies__btn">
        Еще
      </button>
      <Preloader></Preloader>
    </main>
  );
}
export default Movies;
