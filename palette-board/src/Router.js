import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import TopBar from '../src/components/Navigation/topBar';
import Board from '../src/components/DashBoard/Board';
function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <TopBar />
      </Fragment>
      <div>
        <Routes>
          <Route path='/' element={<Board />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Router;