import React from "react";

class TodoFormComponent extends React.Component {
  //constructor with state
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handleChanges = (e) => {
    //update state with each keystroke
    console.log(e.target.value);
    this.setState({ todo: e.target.value });
  };

  //class property to submit form
  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(e, this.state.todo);
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          value={this.state.todo}
          placeholder="new todo item"
          onChange={this.handleChanges}
        />
        <button> Add Todo</button>
      </form>
    );
  }
}
export default TodoFormComponent;
