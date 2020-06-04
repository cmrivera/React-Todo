// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import TodoItem from "./Todo";

const Todos = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          //handleChange={this.props.handleChange}
          //deleteTodo={this.props.deleteTodo}
          toggleItem={props.toggleItem}
        />
      ))}
    </div>
  );
};

export default Todos;
