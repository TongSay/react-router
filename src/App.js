import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
//import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import Admin from './components/Admin';
import React from 'react';

const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <>
     <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about'
      element={ 
        <React.Suspense fallback='Loadding...'>
          <LazyAbout />
        </React.Suspense>
        }></Route>
      <Route path='order-summary' element={<OrderSummary />}></Route>
      <Route path='products' element={<Products />}>
        <Route index element={<FeaturedProduct/>} ></Route>
        <Route path='featured' element= {<FeaturedProduct/>}></Route>
        <Route path='new' element= {<NewProduct/>}></Route>
      </Route>
      <Route path='users' element={<Users />}>
        <Route path=':userId' element={<UserDetail />}></Route>
        <Route path='admin' element={<Admin />}></Route>
      </Route>
      <Route path='*' element={<NoMatch />}></Route>
    </Routes>
    </>
  );
}

export default App;
