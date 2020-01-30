import React, {Component} from 'react';

class Control extends Component {
    render(){
        return (
            <div>
                <a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>CREATE</a>
            </div>
        )
    }
}
export default Control;