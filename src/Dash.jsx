import React from 'react'
import Cat from './Cat'
import { Link } from 'react-router-dom'

export default class Dash extends React.Component{
    state = {
        cats : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        showCats: false,
        showButton: true
      }

      showCats(){
        // console.log('stuart')
        this.setState({
          showCats: !this.state.showCats,
          showButton: !this.state.showButton
        })
      }

    render(){
        return (
            <div className="app">


            <h1
            onClick={()=>this.showCats()}
            >Stuart</h1>



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
        )
    }
}