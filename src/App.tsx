import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { CartPage } from './pages/CartPage/CartPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { AppContext, initialState } from './context'

import styles from './App.module.scss';
import { IContextState, reducer, Action } from './context/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className={styles.app}>
          <Header />
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
