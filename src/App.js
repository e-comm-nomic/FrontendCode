import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { Products } from './Products';
import { AddProduct } from './components/Admin/AddProduct';
import { Cart } from './components/Product/Cart';
import { Order } from './components/auth/Order';
import { AddHotel } from './components/Admin/AddHotel';
import { UpdateHotel } from './components/Admin/UpdateHotel';
import signin from './components/auth/signin';
import signup from './components/auth/signup';
import { UpdateProduct } from './components/Admin/UpdateProduct';
import { Hotels } from './Hotels';
import { ViewProduct } from './components/Product/ViewProduct';
const img = require('./foodimage.jpg');

// const divStyle = {
//   width: '100vw',
//   height: '100vh',
//   backgroundImage: `url(${img})`,
//   backgroundSize: '1920px 1280px',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'relative',
// };

function App() {
  return (
    <div style={{ height: '100%', backgroundColor: 'white' }}>
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path='/products' component={Products} />
            <Route path='/hotels' component={Hotels} />
            <Route path='/addProduct' component={AddProduct} />
            <Route path='/updateProduct' component={UpdateProduct} />
            <Route path='/addHotel' component={AddHotel} />
            <Route path='/updateHotel' component={UpdateHotel} />
            <Route path='/viewProducts' component={ViewProduct} />
            {/* <Route path='/updateProduct' component={UpdateHotel} /> */}
            <Route path='/signin' component={signin} />
            <Route path='/signup' component={signup} />
            <Route path='/cart' component={Cart} />
            <Route path='/orders' component={Order} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

/*{<Route path="/about" component={About} />
  <Route component={NoMatch} />
}*/

export default App;
