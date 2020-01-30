import React, {Component} from 'react';

class Nav extends Component {
    render() {
      return (
        <nav>
          <ul>
            {this.props.items.map(function(ele){
            return <li key={ele.id}><a onClick={
              function(e){
                e.preventDefault();
                this.props.onChangePage(ele.id);
              }.bind(this)} 
              href={ele.id}>{ele.title}</a></li>
            }.bind(this))}
          </ul>
        </nav>
      );
    }
  }
  export default Nav;