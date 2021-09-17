import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ShopContext } from './context/shopContext';

import Home from './pages/Home'
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <Router>
      <p>nav</p>
      <Switch>
        <Route path='/products/:handle'><ProductPage/></Route>
        <Route path='/'><Home/></Route>
      </Switch>
      <p>footer</p>
    </Router>
  );
}

export default App;
 