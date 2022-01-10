import React, { useState } from "react";
import { FormControl, Container, Button, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

const API = "http://localhost:5000/api/v1";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const createTodo = async () => {
    const data = await fetch(API + "/createTodos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    }).then((res) => res.json());
    console.log(data);
    setTodos([...todos, data]);
    setText("");
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={createTodo}>
          <FormControl fullWidth={true}>
            <TextField
              label="Add something"
              variant="standard"
              onChange={handleChange}
              required={true}
              value={text}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 5 }}
            >
              <Add />
              Create
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default TodoForm;
