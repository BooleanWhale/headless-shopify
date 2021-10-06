import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavMenu from './components/NavMenu';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import { ShopContext } from './context/shopContext';

import Home from './pages/Home'
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <Router>
      <NavBar/>
      <NavMenu/>
      <Cart/>
      <Switch>
        <Route path='/products/:handle'><ProductPage/></Route>
        <Route path='/'><Home/></Route>
      </Switch>
      <p>footer</p>
    </Router>
  );
}

export default App;
 