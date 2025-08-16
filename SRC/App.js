import './App.css';
import React, { useState } from 'react';
import Header from "./Mycomponentt/Header.js";
import {Footer} from "./Mycomponentt/footer.js";
import {Todos} from "./Mycomponentt/todos.js";
import {AddTodo} from "./Mycomponentt/Addtodo.js";
function App() {
  const [todo, setTodo] = useState([
  {
    sno: 1,
    name: "ak",
    desc: "go ahead",
  },
  {
    sno: 2,
    name: "hk",
    desc: "go back",
  },
  {f
    sno: 3,
    name: "mk",
    desc: "go lamunda",
  }
]);

function ondelete(todoToDelete) {
  console.log("Deleting:", todoToDelete);
  setTodo(todo.filter((t) => t.sno !== todoToDelete.sno));
}

  return (
    <>
      <Header titles="himanshu" flag={true}/>
      <Todos todoo={todo} ondelete={ondelete}/>
      <AddTodo/>
      <Footer/>
    </>
  );
}

export default App;
