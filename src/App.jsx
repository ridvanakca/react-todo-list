import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useDispatch } from "react-redux";
import { add, remove, toggleCompleted } from "./features/todoSlice";
import { useSelector } from "react-redux";

function App() {
  const [title, setTitle] = useState("");

  const { todos } = useSelector((store) => store.todos);

  const dispatch = useDispatch();

  function handleFormSubmit() {
    dispatch(add(title));
    setTitle("");
  }

  function handleDelete(id) {
    dispatch(remove(id));
  }

  function handleCheckbox(id) {
    dispatch(toggleCompleted(id));
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 5 }}>
          <TextField id='outlined-name' label='Title' value={title} onChange={(event) => setTitle(event.target.value)} />
          <Button onClick={handleFormSubmit} sx={{ marginLeft: 1 }} variant='outlined'>
            Add
          </Button>
        </Box>
        <Box sx={{ bgcolor: "background.paper" }}>
          <List>
            {todos &&
              todos.map((todo) => (
                <ListItem sx={{ backgroundColor: "lightblue", padding: "10px 50px", margin: "10px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }} key={todo.id}>
                  <FormControlLabel 
                  control={<Checkbox onChange={() => handleCheckbox(todo.id)} />} 
                  label={todo.completed ? "Not Completed" : "Completed"} />
                  <ListItemText primary={todo.title} />
                  <Button sx={{ color: "red", fontSize: "24px" }} onClick={() => handleDelete(todo.id)}>
                    x
                  </Button>
                </ListItem>
              ))}
          </List>
        </Box>
      </Container>
    </>
  );
}

export default App;
