import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    const dispatch = useDispatch();

    const handleMarkAsDone = (id) => {
        console.log("Marked as done ",id);
        dispatch(markAsDone(id));
    }

    const clickHandler = (id) => {
        console.log("delete",id);
        dispatch(deleteTodo(id));
    }; 

    return (<>
    <AddForm />
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo) => (<li key={todo.id}>
                <span style={{
                    textDecoration: todo.isDone ? "line-through" : "none"
                }}>
                    {todo.task}
                </span>
                <button onClick={() => clickHandler(todo.id)}>Delete</button>
                <button onClick={() => handleMarkAsDone(todo.id)}>Mark as Done </button>
            </li>))}
        </ul>
    </>
    );
}