import React from "react";

const TodoItem = (props) => {
  return (
    <div
      onClick={() => props.toggleItem(props.todo.id)}
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      <p>{props.todo.title}</p>
    </div>
  );
};

export default TodoItem;
