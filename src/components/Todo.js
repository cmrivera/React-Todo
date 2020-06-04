import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        Hello Todo App
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChange(this.props.todo.id)}
        />
        <button className="btn" onClick={(id) => this.props.deleteTodo(id)}>
          X
        </button>
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
