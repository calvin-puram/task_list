import React from "react";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: Math.random(),
      title: this.state.title,
      completed: false
    };
    this.props.AddTask(data);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form className='flex' onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Enter Task...'
          name='title'
          className='form-control addTodo'
          onChange={this.handleChange}
          value={this.state.title}
        />
        <input
          type='submit'
          value='Add Task'
          className='btn btn-primary submitTodo rounded-0'
        />
      </form>
    );
  }
}

export default AddTodo;
