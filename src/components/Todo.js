import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        Hello Todo App
        <input type="checkbox" />
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
