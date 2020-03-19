import React from "react";

class TodoList extends React.Component {
  // state = {
  //   check: ''
  // }
  markCompleted = () => {
    return {
      backgroundColor: "#ccc",
      color: "#333",
      padding: "5px",
      borderBottom: "1px dotted #f4f4f4",
      textDecoration: this.props.todoItem.completed ? "line-through" : "none"
    };
  };

  // const markCompleted = {
  //   backgroundColor: "#ccc",
  //   color: "#333",
  //   padding: "5px",
  //   borderBottom: "1px dotted #f4f4f4",
  //   textDecoration: props.todoItem.completed ? "line-through" : "none"
  // };

  render() {
    return (
      <div className='container mt-2'>
        <p style={this.markCompleted()}>
          <input
            type='checkbox'
            onChange={() => this.props.changeChecxbox(this.props.todoItem.id)}
          />{" "}
          {this.props.todoItem.title}
          <i
            className='fas fa-trash float-right deleteBtn'
            onClick={() => this.props.removeItem(this.props.todoItem.id)}
          ></i>
        </p>
      </div>
    );
  }
}

export default TodoList;
