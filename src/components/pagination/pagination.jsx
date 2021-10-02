import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown/dropdown';
import Navigation from '../navigation/navigation';

function Pagination({ total, perPage, page }) {
  const [selectedValue, setSelectedValue] = useState(perPage);
  const [activePage, setActivePage] = useState(page);
  const rangeStart = 1 + (activePage - 1) * selectedValue;
  const rangeEnd = activePage * selectedValue

  return (
    <div className="text-center">
      <p>
        {`${rangeStart} - ${rangeEnd <= total ? rangeEnd : total} of ${total}`}
      </p>

      <div className="pagination flex align-items-end justify-content-center">
        <div className="mx-3">

          <Dropdown
            total={total}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setActivePage={setActivePage}
          />
        </div>

        <Navigation
          total={total}
          selectedValue={selectedValue}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
}

export default Pagination;

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
}
