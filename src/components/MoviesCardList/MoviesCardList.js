import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies-cards">
      <div className="movies-cards__container">
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </div>
    </section>
  );
}
export default MoviesCardList;
