import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <section className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <button className="movies-cards__btn">Еще</button>
      <Preloader></Preloader>
    </section>
  );
}
export default Movies;
