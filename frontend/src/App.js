import React, { Component } from 'react';
import { NavBar, Base} from './components';
import { Home, Add } from './containers';
import { Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <>
        <Route path='/' component={NavBar} />
        <Route path='/' exact component={Base} />
        <Route path='/Movies' exact component={Home} />
        <Route path='/add' exact component={Add} />
      </>
    );
  }
}

export default App;
