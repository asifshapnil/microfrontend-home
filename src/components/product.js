import React, { lazy, Suspense } from 'react'; 
import {useStore} from '../store';
import Display from '../shared/Display';

const ProductApp = lazy(() => import('ProductApp/Product'));

function Product() {
  const { state } = useStore();

  return (
    <div className="App">
      <Suspense fallback={<div>Loading Products...</div>}>
        <Display condition={state.isAuthenticated}>
          <ProductApp />
        </Display>
      </Suspense>
    </div>
  );
}

export default Product;