import AddTodoButton from "../reusable/Buttons/AddTodoButton";
import TodoInput from "../reusable/Inputs/TodoInput";

import styles from "./css/AddTodo.module.css";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, handleInput } from "../../redux/slices/todoSlice";

import useAlertHandler from "../reusable/Alert/useAlertHandler";
import AlertComponent from "../reusable/Alert/AlertComponent";

export default function AddTodo() {
  const inputValue = useSelector((state) => state.todo.inputValue);
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const showAlert = useAlertHandler();

  const addNewTodo = () => {
    const checkDuplicateTodo = todoList.some((el) => el == inputValue);
    if (!checkDuplicateTodo) {
      if (inputValue) {
        dispatch(addTodo(inputValue));
        showAlert(true, "success", "Task Added Successfully");
      }
    } else {
      if (inputValue) {
        dispatch(handleInput(""));
        showAlert(true, "error", "Task Already Added");
      }
    }
  };

  return (
    <div className={styles.container}>
      <AlertComponent />
      <TodoInput value={inputValue} />
      <AddTodoButton handler={addNewTodo} />
    </div>
  );
}
