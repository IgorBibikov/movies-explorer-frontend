import React from 'react';

function FilterCheckbox({ handleCheckbox, isChecked }) {
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={handleCheckbox}
        checked={isChecked}
      />
      <label className="checkbox__label" htmlFor="checkbox"></label>
      <h2 className="checkbox__title">Короткометражки</h2>
    </div>
  );
}
export default FilterCheckbox;
