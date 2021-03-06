import React from "react";
import TodoFormComponent from "./components/TodoForm";
import Todos from "./components/TodoList";
import "./components/Todo.css";
const todos = [
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
  {
    id: 3,
    title: "Third Todo",
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  toggleItem = (todoId) => {
    console.log(todoId);
    //map over array
    //when we find item clicked, toggle to purchased
    //otherwise return item unpurchased
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: todo,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  clearTodo = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <Todos
            todos={this.state.todos}
            toggleItem={this.toggleItem}
            clearTodo={this.clearTodo}
          />
        </div>
        <div className="footer">
          <h1>Chris's React Todo App!</h1>
          <TodoFormComponent addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
