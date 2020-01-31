import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hello World
//     </div>
//   );
// }

class Nav extends Component {
  hello() {
    return 'says hello.';
  }
  render() {
    var li = this.hello();
    return (
      <nav>
        <ol>
          {li}
        </ol>
      </nav>
    );
  }
}

class App extends Component {
  render() {
    return (
        <div className="App">
          Hello World
          <Nav></Nav>
        </div>
    );
  }
}

export default App;
