import React, { lazy, Suspense } from 'react'; 
import './App.css';
import Display from './shared/Display';
import { useStore } from './store';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from './components/auth';
import Product from './components/product';
import Private from './core/private';

const Header = lazy(() => import('HeaderApp/Header'));

function App() {
  const { state } = useStore();

  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
      
        <Routes>
          <Route path="/" element={<Navigate to="/product" />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/product' element={
            <Private>
              <Product />
            </Private>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;