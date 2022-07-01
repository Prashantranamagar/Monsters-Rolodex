import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      name: 'Person',
    };
  }
  render()  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>HI {this.state.name}</p>
            <button 
            onClick={() => {
              this.setState({ name: 'Rana'});
            }}
            >
              Change Name
            </button>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
