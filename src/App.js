import React from "react";
import TodoFormComponent from "./components/TodoForm";
import Todos from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "First Todo",
          completed: true,
        },
        {
          id: 2,
          title: "Second Todo",
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <Todos todos={this.state.todos} />
        </div>
        <TodoFormComponent />
      </div>
    );
  }
}

export default App;
