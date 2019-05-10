import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render(){

    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo}/>
    ));
  }
  }

export default Todos;


// import React from 'react';
//
//
// function Todos() {
//   return (
//     <div>
//       <h1>Todo</h1>
//     </div>
//   );
// }
//
// export default Todos;
