import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const API = "http://localhost:5000/api/v1";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    await fetch(API + "/getAllTodos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log("Error: ", err));
  };

  const deleteTodo = async (todoID) => {
    await fetch(API + "/getSingleTodo/" + todoID, {
      method: "DELETE",
    }).then((res) => res.json());

    setTodos((todos) => todos.filter((todo) => todo._id !== todoID));
  };

  console.log(todos);

  return (
    <>
      <Navbar />
      <TodoForm />

      {todos.map((todo, index) => {
        return (
          <TodoList
            todoNo={index}
            todo={todo.text}
            key={todo._id}
            todoID={todo._id}
            completed={todo.complete}
            deleteTodo={() => deleteTodo(todo._id)}
          />
        );
      })}
    </>
  );
}

export default App;
