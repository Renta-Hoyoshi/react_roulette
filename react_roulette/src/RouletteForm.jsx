import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";

export const RouletteForm = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "よっしー",
    "おかぴー",
    "よっしー",
    "おかぴー",
  ]);

  const onChangeText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickSet = () => {
    alert("a");
  };

const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo 
        todoText={todoText}
        onChangeText={onChangeText}
        onClickAdd={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      <IncompleteTodos 
        todos={incompleteTodos}
        onClickDelete={onClickDelete}
      />
      <div className="set-roulette-button">
        <button onClick={onClickSet}>SET</button>
      </div>
    </>
  )
}