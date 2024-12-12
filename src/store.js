import { createContext, useContext, useReducer } from 'react';

// Define an initial state for your store
const initialState = {
  user: 'Asif',
  isAuthenticated: false,
};

// Define a reducer function to manage state updates
function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
}

// Create a context for the store
const StoreContext = createContext();

// Custom hook to access the store
export function useStore() {
  return useContext(StoreContext);
}

// Provider component to wrap around the app
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}


// Export the entire store object
export const store = {
    state: initialState,
    reducer,
    useStore,
    StoreProvider,
    StoreContext
};

export const dummy = 'Dummy Value'; // Add this export
