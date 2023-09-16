import img from '../../images/mov-img.png';
function MoviesCard() {
  return (
    <article className="movies-card">
      <button className="movies-card__save-btn" type="button">
        Сохранить
      </button>
      <button className="movies-card__saved-btn" type="button"></button>
      <button className="movies-card__delete-btn" type="button"></button>
      <img className="movies-card__image" src={img} alt="Постер фильма" />
      <div className="movies-card__group">
        <h2 className="movies-card__title">33 слова о дизайне33</h2>
        <p className="movies-card__duration">1ч 17м</p>
      </div>
    </article>
  );
}
export default MoviesCard;