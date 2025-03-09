import DraggableTodo from "../reusable/Todos/DraggableTodo";
import TodoValue from "../reusable/Todos/TodoValue";
import styles from "./css/ShowAllTodos.module.css";

import { useSelector, useDispatch } from "react-redux";
import { completeTodoDelete } from "../../redux/slices/todoSlice";

import useAlertHandler from "../reusable/Alert/useAlertHandler";
import AlertComponent from "../reusable/Alert/AlertComponent";

export default function ShowAllTods() {
  const doneTodosList = useSelector((state) => state.todo.doneTodos);
  const showAlert = useAlertHandler();

  const dispatch = useDispatch();

  const deleteCompleteTodo = (id) => {
    dispatch(completeTodoDelete(id));
    showAlert(true, "success", "Delete Done :)");
  };

  return (
    <div className={styles.container}>
      <AlertComponent />
      <div className={styles.allTodo}>
        <h2 className={styles.h2}>All Task</h2>
        <DraggableTodo />
      </div>
      <div className={styles.todoComplete}>
        <h2 className={styles.h2}>Completed Task</h2>
        {doneTodosList.length &&
          doneTodosList.map((el) => (
            <TodoValue
              key={el}
              id={el}
              text={el}
              display={"none"}
              textStyle={{ textDecoration: "line-through red" }}
              handler={() => deleteCompleteTodo(el)}
            />
          ))}
      </div>
    </div>
  );
}
