import React, { lazy, Suspense, useEffect } from 'react'; 
import Display from '../shared/Display';
import {useStore} from '../store';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthApp = lazy(() => import('AuthApp/Auth'));

function Auth() {
  const { state } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(state.isAuthenticated) {
      navigate('/product');
    }
  }, [state.isAuthenticated])

  return (
    <div className="App">
      <Suspense fallback={<div>Loading Auth...</div>}>
        <Display condition={!state.isAuthenticated}>
          <AuthApp />
        </Display>
      </Suspense>
    </div>
  );
}

export default Auth;