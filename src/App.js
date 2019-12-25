import React from 'react';
// import logo from './logo.svg';
import './App.css';

import  routes  from './routes'

class App extends React.Component {
  
  state = {}

 
  
  render(){

    return (
      <div>
        {routes}
      </div>
  );
}
}

export default App;
