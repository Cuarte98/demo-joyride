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
    fetch('http://www.mocky.io/v2/5b59dec52f0000fb2a5f960d')
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
