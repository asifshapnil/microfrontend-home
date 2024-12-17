import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Define an initial state for your store
const initialState = {
  user: 'Dharma',
  isAuthenticated: false,
  products: [
    {
      id: 1,
      name: 'Test Product1',
      description: 'This is a test product'
    },
    {
      id: 2,
      name: 'Test Product2',
      description: 'This is a test product'
    },
    {
      id: 3,
      name: 'Test Product3',
      description: 'This is a test product'
    },
    {
      id: 4,
      name: 'Test Product4',
      description: 'This is a test product'
    },
    {
      id: 5,
      name: 'Test Product5',
      description: 'This is a test product'
    },
    {
      id: 6,
      name: 'Test Product6',
      description: 'This is a test product'
    },
    {
      id: 7,
      name: 'Test Product7',
      description: 'This is a test product'
    },
    {
      id: 8,
      name: 'Test Product8',
      description: 'This is a test product'
    },
    {
      id: 9,
      name: 'Test Product9',
      description: 'This is a test product'
    },
    {
      id: 10,
      name: 'Test Product10',
      description: 'This is a test product'
    }
  ]
};

// Define a reducer function to manage state updates
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      const { username, password } = action.payload;
      // Validate username and password (example credentials: admin/admin)
      if (username === 'admin' && password === 'admin') {
        state.isAuthenticated = true;
        console.log(state);
        
        return {
          ...state,
          isAuthenticated: true,
          user: username,
          token: uuidv4(), // Generate random UUID token
        };
      }
      alert('Invalid username or password');
      return state;
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(reducer);

// Provider component to wrap around the app
export function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

// Custom hook to access the state
export function useStore() {
  return {
    state: useSelector(state => state),
    dispatch: useDispatch(),
  };
}
