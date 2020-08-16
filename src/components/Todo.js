import React, { Component } from 'react';

class Todo extends Component {
   
  render() {
      let { text , onClick , completed } = this.props;
    return (
        <li
            onClick={onClick}
            style={{ textDecoration : completed ? 'line-through' : 'none' }}
        >
            {text}
        </li>
    );
  }
}

export default Todo;
