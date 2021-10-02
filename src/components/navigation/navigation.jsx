import React from 'react';
import { nanoid } from 'nanoid';
import cn from 'classnames';

function Navigation({ activePage, setActivePage, total, selectedValue }) {
  const pageLinksAmount = Math.ceil(total / selectedValue);
  const pages = Array.from({ length: pageLinksAmount });
  const firstPage = 1;
  const lastPage = pages.length;

  return (
    <nav>
      <ul className="pagination flex-wrap my-0">
        <li
          className="page-item"
          onClick={() => (
            activePage !== firstPage && setActivePage(--activePage)
          )}
        >
          <button className="page-link">Previous</button>
        </li>
        {
          pages.map((page, index) => (
            <li
              key={nanoid()}
              className={cn({
                'page-item': true,
                'active': ++index === activePage
              })}
              onClick={() => setActivePage(index)}
            >
              <button className="page-link">{index}</button>
            </li>
          ))
        }
        <li
          className="page-item"
          onClick={() => (
            activePage !== lastPage && setActivePage(++activePage)
          )}
        >
          <button className="page-link">Next</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
