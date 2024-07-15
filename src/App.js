import {useState} from "react";
import './App.css';


function App() {
  const [todoList, setTodoList] = useState(["일찍 일어나기", "운동하기"]);

  function Todo(props) {
      return (
          <li>
              <input type="checkbox" />
              <span>{props.content}</span>
              <button className="del" >삭제</button>
          </li>
      )
  }

  function createTodo() {
      const inpBox = document.getElementById('inpBox');
      const content = inpBox.value;
      setTodoList((cur) => [...cur, content]);
      inpBox.value = '';
  }

  return (
      <div>
          <h1>오늘 할 일은?</h1>
          <div className="form">
              <form action="#" className="ipt" onSubmit={createTodo}>
                  <input className="ipt" id="inpBox" type="text" placeholder="할 일을 입력해주세요." />
                  <button className="sub" id="subBtn">제출</button>
              </form>
          </div>
          <div>
              <ul>
                  {todoList.map((content, index) => <Todo key={index} content={content} />)}
              </ul>
          </div>
      </div >
  )
}


export default App;
