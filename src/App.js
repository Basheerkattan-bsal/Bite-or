import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Main from './components/routs/Main';
import Cart from './components/routs/Cart';
import CartPageContextProvider from './context/CartPageContextProvider';

function App() {
  return (
    <CartPageContextProvider>
      <Routes>
      <Route path='/' element={  <Main />} />
      <Route path='cart' element={<Cart />}/>
    </Routes>
    </CartPageContextProvider>
    

  );
}

export default App;
