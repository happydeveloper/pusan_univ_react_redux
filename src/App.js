import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Article from './components/Article';
import Header from './components/Header';
import Control from './components/Control';


class App extends Component {
  state = {
    mode:'Welcome' , //c r u d
    elected_article_id:null,
    content:[
      {id:1, title:'HTML', desc: "HTML is ..."},
      {id:2, title:'CSS', desc: "CSS is ..."},
      {id:3, title:'JavaScript', desc: "JavaScript is ..."}
    ]
  }
  render () {
    var articleTag = null;
    var textBoxTag = null;
    if(this.state.mode === 'Welcome'){
        articleTag = <Article title="WEB" desc="WEB is ..."></Article>
    } else if(this.state.mode === 'r') {
        var sel = null;
        var i = 0;
        while(i < this.state.content.length){
          if(this.state.content[i].id === this.state.elected_article_id){
            sel = this.state.content[i];
            break;
          }
          i = i + 1;
        }

        articleTag = <Article title={sel.title} desc={sel.desc}></Article>
    } else if(this.state.mode === 'c') {
        textBoxTag = <textarea></textarea>
    }
    return (
    <div className="App">
        <Header title="WEB" onChangePage={function(){
          this.setState({
              mode:'Welcome'
          });
        }.bind(this)}></Header>
        <Nav onChangePage={function(id){
          console.log(id);
          this.setState(
            {
              elected_article_id:id,
              mode:'r'
            }
          )
        }.bind(this)} 
        items={this.state.content}></Nav>
        <Control onChangePage={function(){
          this.setState({mode:'c'})
        }.bind(this)}></Control>
        {articleTag} {textBoxTag}
      </div>
    ); 
  }
}

export default App;
