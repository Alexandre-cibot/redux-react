import React from 'react';
import { getTodoList } from "../../redux/selectors.js";
import { connect } from 'react-redux';

import style from './todoList.module.css';


class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    if (!todos.length) {
      return (
        <p>No todos to do !</p>
      )
    }
    return (
      <ul className={style.todoList}>
        {
          todos.map((todo, idx) => (
            <li key={idx}>{todo.title}</li>
          ))
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  const todos = getTodoList(state);
  return { todos }
}
export default connect(mapStateToProps)(TodoList)
// export default TodoList