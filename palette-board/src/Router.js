import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import TopBar from '../src/Navigation/topBar';
import Board from '../src/DashBoard/Board';
function Router() {
  console.log("route");
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