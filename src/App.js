import React, { Component } from 'react';
import Header from './Components/Header';
import Aside from './Components/Aside';
import Main from './Components/Main'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      run: false,
      steps: []
    }
  }

  componentDidMount(){
    fetch('http://www.mocky.io/v2/5b5b22103100006f009a8aec')
    .then((response)=>(
      response.json()
    ))
    .then(json => this.setState({
        data: json,
    }))
  }
  render() {
    const { data } = this.state
    return (
      <div className="App">
        <Header />
        <Aside />
        <Main data={data}/>
      </div>
    );
  }
}

export default App;
