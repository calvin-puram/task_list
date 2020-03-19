import React from "react";
import Header from "./Header";
import "./index.css";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

class App extends React.Component {
  state = {
    todo: [
      // { id: 1, title: "code in the afternoon", completed: true },
      // { id: 2, title: "visit a friend", completed: true },
      // { id: 3, title: "take some cofee", completed: false }
    ]
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => this.setState({ todo: data.slice(0, 10) }));
  }

  changeCompleted = str => {
    this.setState(
      this.state.todo.map(todo => {
        if (todo.id === str) {
          return (todo.completed = !todo.completed);
        }
        return todo; //if the str is not equal to todo.id
      })
    );
    //map through the todo
    //check if todo.id === id
    //toggle todo.completed
    //return todo
  };

  deleteTask = str => {
    this.setState({ todo: this.state.todo.filter(todo => todo.id !== str) });
  };

  AddTask = todo => {
    this.setState({ todo: [todo, ...this.state.todo] });
  };

  render() {
    return (
      <div>
        <Header />
        <AddTodo AddTask={this.AddTask} />
        <Todos
          todos={this.state.todo}
          changeCompleted={this.changeCompleted}
          deleteTask={this.deleteTask}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
