import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Error from './pages/Error';

class App extends React.Component {

  render(){

      return (
        <div>
          <Switch>
            <Route path='/' component = {HomePage} exact/>
            <Route path='/about' component = {About}/>
            <Route path='*' component = {Error}/> 
          </Switch>
        </div>
        
      );
  }
}

export default App;
