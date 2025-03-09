import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./css/TodoValue.module.css";
import TaskIcon from "@mui/icons-material/Task";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../../../redux/slices/todoSlice";

import useAlertHandler from "../../reusable/Alert/useAlertHandler";
import AlertComponent from "../../reusable/Alert/AlertComponent";

export default function TodoValue({
  id,
  text,
  display,
  textStyle,
  iconCheck,
  handler,
}) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const dispatch = useDispatch();
  const showAlert = useAlertHandler();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
    showAlert(true, "success", "Task Deleted Done ");
  };

  const handleCompleteTodo = () => {
    dispatch(completeTodo(id));
    showAlert(true, "success", "Congratulation Task Completed");
  };

  return (
    <div
      className={styles.container}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <p style={textStyle}>
        {iconCheck ? (
          <TaskIcon
            sx={{
              height: "1rem",
              color: "rgba(25, 0, 255, 0.7)",
            }}
          />
        ) : (
          <DoneOutlineIcon
            sx={{
              height: "1rem",
              color: "rgba(0, 38, 255, 0.81)",
            }}
          />
        )}
        {text}
      </p>
      <span>
        <IconButton sx={{ display: display }} onMouseDown={handleCompleteTodo}>
          <CheckCircleOutlineIcon />
        </IconButton>
        <IconButton onMouseDown={handler ? handler : handleDeleteTodo}>
          <DeleteIcon sx={{ color: "rgba(255, 0, 0, 0.67)" }} />
        </IconButton>
        <AlertComponent />
      </span>
    </div>
  );
}
