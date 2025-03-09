import AddTodo from "../components/TodoComponents/AddTodo";
import ShowAllTodos from "../components/TodoComponents/ShowAllTodos";
import VideoCom from "../components/VideoCom";

export default function MainPage() {
  return (
    <>
      <VideoCom />
      <AddTodo />
      <ShowAllTodos />
    </>
  );
}
