import { useState } from "react";
import TodoList from "./TodoList";

import "./App.css";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Todo 1",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Todo 2",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Todo 3",
      isCompleted: false,
    },
  ]);
  return (
    <div className="App">
      <header>
        <h1 className="todoAppTitle">todos</h1>
      </header>
      <TodoForm
        onAdd={(text) => {
          if(!text == ""){
            setTodos([
              ...todos,
              {
                id: Math.random(),
                text: text,
                isCompleted: false,
              },
            ]);
          }
        }}
      />
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
        onChange={(newTodo) => {
          setTodos(
            todos.map((todo) => {
              if (todo.id === newTodo.id) {
                return newTodo;
              }
              return todo;
            })
          );
        }}
      />
      <TodoFooter
        todos={todos}
        clearCompleted={() => {
          setTodos(todos.filter((todo) => !todo.isCompleted));
        }}
      />
    </div>
  );
}

export default App;
