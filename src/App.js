import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
        <header>
          <h1><a href="/welcome" onClick={function(e){
            e.preventDefault();
            alert('A clicked');
          }} >{this.props.title}</a></h1>
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
class App extends Component {
  state = {
    mode:'r' //c r u d
  }
  render () {
    var articleTag = null;
    if(this.state.mode === 'Welcome'){
        articleTag = <Article title="WEB" desc="WEB is ..."></Article>
    } else if(this.state.mode === 'r') {
        articleTag = <Article title="React" desc="React is ..."></Article>
    }
    return (
    <div className="App">
        <Header title="WEB" ></Header>
        <Nav items={[
                      {id:1, title:'HTML', desc: "HTML is ..."},
                      {id:2, title:'CSS', desc: "CSS is ..."},
                      {id:3, title:'JavaScript', desc: "JavaScript is ..."}
                    ]}></Nav>
        {articleTag}
      </div>
    ); 
  }
}

export default App;
