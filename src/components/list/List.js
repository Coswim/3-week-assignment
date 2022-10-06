import React, { useState } from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List(props) {
  const deleteTodo = (index) => {
    const filterArray = props.todoList.filter((todoItem, _index) => {
      return _index !== index;
    });
    props.setTodoList(filterArray);
  };

  const togleTodo = (isDone, index) => {

    const doneList = props.todoList.map((todo, _index) => {
      if (index === _index) {
        return isDone ? { ...todo, isDone: false } : { ...todo, isDone: true };
      } else return todo;
    });
    props.setTodoList(doneList);
  };

  return (
    <div className="todoListBox">
      <h1> Working </h1>
      <div className="repeatFormBox">
        <div className="repeatForm">
          {props.todoList.map((todoItem, index) =>
            todoItem.isDone ? (
              ""
            ) : (
              <Todo
                todoItem={todoItem}
                togleTodo={togleTodo}
                deleteTodo={deleteTodo}
                index={index}
              />
            )
          )}
        </div>
      </div>
      <h1> Done </h1>
      <div className="repeatFormBox">
        <div className="repeatForm">
          {props.todoList.map((todoItem, index) =>
            !todoItem.isDone ? (
              ""
            ) : (
              <Todo
                todoItem={todoItem}
                togleTodo={togleTodo}
                deleteTodo={deleteTodo}
                index={index}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default List;
