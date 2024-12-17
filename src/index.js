import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useStore, StoreProvider } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
export { default as Display } from './shared/Display';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
);

export { useStore };
