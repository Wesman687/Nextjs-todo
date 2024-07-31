
import TodoList from "@/components/TodoList";
import CreateTodo from "@/components/CreateTodo";


export default function Home() {
  return (
    <>
    <div className="container">
      <TodoList />
      <CreateTodo />
      </div>
    </>
  );
}
