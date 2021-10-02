import React from 'react';
import './app.scss';
import Pagination from './components/pagination/pagination';

const App = () => {

  return (
    <>
      <h1 className="text-center">Pagination</h1>

      <Pagination
        total={42}
        perPage={5}
        page={4}
      />
    </>
  )
}

export default App;
