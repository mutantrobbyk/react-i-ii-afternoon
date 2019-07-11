import React, { Component } from 'react';
import './App.css';
import Data from './data'
import Next from '../src/components/Next'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dataSheet: Data,
      index: 0
    }
  }
  next() {
    this.setState({
      index: this.state.index + 1
    })
    if (this.state.index === this.state.dataSheet.length - 1) {
      this.setState({
        index: 0
      })
    }
  }
  previous() {
    this.setState({
      index: this.state.index - 1
    })
    if (this.state.index === 0) {
      this.setState({
        index: this.state.dataSheet.length - 1
      })
    }
  }
  render() {
    let dataSheet = this.state.dataSheet.map(data => {
      return (
        <div className="content">
          <p className='id'>{data.id}/{this.state.dataSheet.length}</p>
          <p className='firstName'>{data.name.first} {data.name.last}</p>
          <p className='country'><span>From:</span> {data.country}</p>
          <p className='title'><span>Job Title:</span> {data.title}</p>
          <p className='employer'><span>Employer:</span> {data.employer}</p>
          <ol className='movies'><span>Favorite Movies:</span>
            <li>{data.favoriteMovies[0]}</li>
            <li>{data.favoriteMovies[1]}</li>
            <li>{data.favoriteMovies[2]}</li>
          </ol>
        </div>
      )
    })
    return (
      <div className="App">
        <header>
          <h4>Home</h4>
        </header>
        <body>
          {dataSheet[this.state.index]}
          <div className="bar">
            <h3 onClick={() => this.previous()}><span>&#60;</span> Previous</h3>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
            <h3 onClick={() => this.next()}>Next <span>&#62;</span></h3>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
