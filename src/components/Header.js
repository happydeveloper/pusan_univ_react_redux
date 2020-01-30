import React, { Component } from 'react';
export class Header extends Component {
  render() {
    return (<header>
      <h1><a href="/welcome" onClick={function (e) {
        e.preventDefault();
        alert('A clicked');
        this.props.onChangePage();
      }.bind(this)}>{this.props.title}</a></h1>
    </header>);
  }
}
export default Header;
