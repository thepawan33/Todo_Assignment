import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function AddTodoButton({ handler }) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
          color: "#496e4b",
          backgroundColor: "#496E4B33",
        }}
        endIcon={<AddCircleOutlineIcon />}
        onClick={handler}
      >
        Add Task
      </Button>
    </>
  );
}
