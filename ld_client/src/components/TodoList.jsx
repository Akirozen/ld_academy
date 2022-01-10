import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import {
  CheckCircleOutline,
  Delete,
  CircleOutlined,
} from "@mui/icons-material";

const API = "http://localhost:5000/api/v1";

const TodoList = ({ todoNo, todo, todoID, completed }) => {
  const [todos, setTodos] = useState([]);
  const [isCompleted, setIsCompleted] = useState(completed);

  const completeTodo = async (todoID) => {
    const data = await fetch(API + "/completeTodos/" + todoID).then((res) =>
      res.json()
    );
    // console.log(data);
    setIsCompleted(data.complete);
  };

  // const delTodo = deleteTodo(todoID);

  // console.log(isCompleted);

  // const deleteTodo = async (todoID) => {
  //   const data = await fetch(API + "/getSingleTodo/" + todoID, {
  //     method: "DELETE",
  //   }).then((res) => res.json());
  //   setTodos((todos) => todos.filter((todo) => todo._id !== data._id));
  // };

  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={{ marginTop: 35, background: "lightblue" }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            <IconButton
              style={{ float: "left", color: "gray" }}
              onClick={() => completeTodo(todoID)}
            >
              {isCompleted ? (
                <CheckCircleOutline
                  style={{ color: "green" }}
                ></CheckCircleOutline>
              ) : (
                <CircleOutlined></CircleOutlined>
              )}
            </IconButton>
            {todoNo + 1}.&nbsp;{todo}
            <IconButton
              style={{ float: "right", color: "red" }}
              // onClick={delTodo}
              onClick={deleteTodo(todoID)}
            >
              <Delete></Delete>
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TodoList;
