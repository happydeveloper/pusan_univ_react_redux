import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
        <header>
          <h1>{this.props.title}</h1>
        </header>
    );
  }
}
class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          {this.props.items.map(function(ele){
          return <li><a href={ele.id}>{ele.title}</a></li>
          })}
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>
          {this.props.desc}
        </p>
      </article>
    );
  }
}
function App() {
  return (
    <div className="App">
        <Header title="WEB"></Header>
        <Nav items={[
                      {id:1, title:'HTML'},
                      {id:2, title:'CSS'},
                      {id:3, title:'JavaScript'}
                    ]}></Nav>
        <Article title="WEB" desc="WEB is ..."></Article>
    </div>
  );
}

export default App;
