function FilterCheckbox() {
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        name="checkbox"
        id="checkbox"
      />
      <label className="checkbox__label" for="checkbox"></label>
      <h2 className="checkbox__title">Короткометражки</h2>
    </div>
  );
}
export default FilterCheckbox;
