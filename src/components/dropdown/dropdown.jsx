import React from 'react'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function Dropdown({ total, selectedValue, setSelectedValue, setActivePage }) {
  const selectHandler = (event) => {
    setSelectedValue(event.target.value);
    setActivePage(1);
  }

  const perPageOptions = Array.from({ length: total });

  return (
    <div className="dropdown">
      <select
        name="select"
        className="btn border"
        onChange={selectHandler}
        value={selectedValue}
      >
        {
          perPageOptions.map((option, index) => (
            <option
              key={nanoid()}
              value={++index}
            >
              { index }
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  total: PropTypes.number.isRequired,
}
