import { useState } from "react";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout"
import List from "../components/list/List"
import Form from "../components/form/Form"

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    {
      title: "다이어트",
      content: "이번주 20kg 감량",
      isDone: false,
    },
    {
      title: "책읽기",
      content: "이번주 목표 3장 읽기",
      isDone: false,
    },
  ]);

  return (
    <Layout>
      <Header />
      <div className="contentsBox">
        <Form todoList={todoList} setTodoList={setTodoList} />
        <List todoList={todoList} setTodoList={setTodoList} />
      </div>
    </Layout>
  );
};

export default TodoList;