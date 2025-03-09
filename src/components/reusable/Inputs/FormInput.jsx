import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { handleInput } from "../../../redux/slices/formSlice";

export default function FormInput({ label, name, value, type }) {
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(handleInput({ [e.target.name]: e.target.value }));
  };

  return (
    <>
      <TextField
        size="normal"
        label={label}
        name={name}
        variant="outlined"
        onChange={onChangeHandler}
        value={value}
        type={type}
        fullWidth
        required
        sx={{ margin: ".8rem 0" }}
      />
    </>
  );
}
