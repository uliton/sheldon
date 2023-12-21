import React from 'react';
import { Route, Routes } from 'react-router';
import { Main } from './pages/Main/Main';
import { NotFound } from './pages/NotFound/NotFound';
import style from './App.module.scss';

export const App = () => (
  <div className={style.app}>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </div>
);
