// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import TodoItem from "./Todo";

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0, 20) });
  }

  render() {
    let filteredTodos = this.props.todos.filter((todo) => {
      return todo.title.indexOf(this.state.search) !== -1;
    });
    return (
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            //handleChange={this.props.handleChange}
            //deleteTodo={this.props.deleteTodo}
            toggleItem={this.props.toggleItem}
          />
        ))}
        <button className="btn" onClick={this.props.clearTodo}>
          {" "}
          Clear Completed Todos
        </button>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          placeholder="Search Todos Here"
        />
      </div>
    );
  }
}

export default Todos;
