import React from "react";
import "./style.css";

const Todo = (props) => {
  return (
    <div className="box_wrap" key={props.index}>
      <div className="todolistbox">
        <span className="title">{props.todoItem.title}</span>
        <span className="main">{props.todoItem.content}</span>

        <div className="mybtns">
          <button
            onClick={() => {
              props.deleteTodo(props.index);
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              props.togleTodo(props.todoItem.isDone, props.index);
            }}
          >
            {props.todoItem.isDone? "취소" : "완료"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
