import TextField from "@mui/material/TextField";
import { handleInput } from "../../../redux/slices/todoSlice";

import { useDispatch } from "react-redux";

export default function TodoInput({ value }) {
  const dispatch = useDispatch();
  const handleInputValue = (e) => {
    dispatch(handleInput(e.target.value));
  };
  return (
    <>
      <TextField
        label="Add Task"
        name="task"
        value={value}
        onChange={handleInputValue}
        variant="outlined"
        fullWidth
      />
    </>
  );
}
