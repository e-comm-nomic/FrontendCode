import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { Products } from './Products';
import { AddProduct } from './components/Admin/AddProduct';
import signin from './components/auth/signin';
import signup from './components/auth/signup';

const img = require('./foodimage.jpg');

const divStyle = {
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${img})`,
  backgroundSize: '1920px 1280px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'relative',
};

function App() {
  return (
    <div style={divStyle}>
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path='/products' component={Products} />

            <Route path='/addProduct' component={AddProduct} />
            <Route path='/signin' component={signin} />
            <Route path='/signup' component={signup} />
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
