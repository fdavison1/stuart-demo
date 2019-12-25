import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Cat from './Cat'

class App extends React.Component {
  
  state = {
    cats : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    showCats: false,
    showButton: true
  }

  showCats(){
    // console.log('stuart')
    this.setState({
      showCats: true,
      showButton: false
    })
  }
  
  render(){

    return (
      <div className="app">


      <h1>Stuart</h1>
      <p>A Website</p>

{this.state.showCats &&
      <div className='cats'>
      {this.state.cats.map(cat => {
        return <Cat />
      })}
      </div>}

{this.state.showButton &&
      <button
      onClick={() => this.showCats()}
      >show cats</button>
}
     
    </div>
  );
}
}

export default App;
