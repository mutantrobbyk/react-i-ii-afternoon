import React, { Component } from 'react';
import './App.css';
import Data from './data'
import Next from '../src/components/Next'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dataSheet: Data,
      index: 0,
      id: 26,
      city: '',
      country: '',
      employer: ''
    }
  }
  newCard(){
    this.setState({
      dataSheet: [...Data,{id:this.state.id, name:{first:'Bob', last: 'Bobby'},city: this.state.city,title: 'Awesome', favoriteMovies:['1','2','3'], country: this.state.country, employer: this.state.employer},],
      city:'',
      country: '',
      employer: ''
    })
    this.state.id++
  }
  delete(){
    this.state.dataSheet.splice(this.state.index, 1)
    this.setState({
      dataSheet: [...this.state.dataSheet],
      index: this.state.index -1
    })
  }
  handleInput = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    })
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
    console.log(this.state.index)
    let dataSheet = this.state.dataSheet.map(data => {
      return (
        <div className="content">
          <p className='id'>{this.state.index + 1}/{this.state.dataSheet.length}</p>
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
            <button onClick={() => this.delete()}>Delete</button>
            <button onClick={() => this.newCard()}>New</button>
            <input onChange={e => this.handleInput(e)} value={this.state.city} placeholder='city' type="text"/>
            <input onChange={e => this.handleInput(e)} value={this.state.country} placeholder='country' type="text"/>
            <input onChange={e => this.handleInput(e)} value={this.state.employer} placeholder='employer' type="text"/>
            <h3 onClick={() => this.next()}>Next <span>&#62;</span></h3>
          </div>
        </body>
      </div>
    );
  }
}

export default App;