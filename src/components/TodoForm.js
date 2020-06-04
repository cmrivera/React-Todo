import React from "react";

const TodoFormComponent = (props) => {
  return (
    <form>
      <input placeholder="new todo item" onChange={props.updateTodoForm} />
    </form>
  );
};

export default TodoFormComponent;
