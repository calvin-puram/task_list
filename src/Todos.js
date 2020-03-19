import React from "react";
import TodoList from "./TodoList";

const Todos = props => {
  return (
    <div className='row'>
      <div className='col-md-6 mx-auto mt-5'>
        {props.todos.map(todo => (
          <TodoList
            todoItem={todo}
            key={todo.id}
            changeChecxbox={props.changeCompleted}
            removeItem={props.deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
