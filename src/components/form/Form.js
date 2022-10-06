import { useRef } from "react";
import "./style.css"

const Form = (props) => {

  let titleRef = useRef();
  let contentRef = useRef();

  const addContents = () => {
    props.setTodoList([
      ...props.todoList,
      {
        title: titleRef.current.value,
        content: contentRef.current.value,
        isDone: false,
      },
    ]);
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <div className="under_header">
      <div className="under_header_1">
        제목
        <input type="text" ref={titleRef}></input>
        내용
        <input type="text" ref={contentRef}></input>
      </div>

      <div className="under_header_2">
        <button onClick={addContents}>추가하기</button>
      </div>
    </div>
  );
};

export default Form;
