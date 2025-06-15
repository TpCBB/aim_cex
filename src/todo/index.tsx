import { useState, useEffect } from "react";
import type TodoProps from "../../types/todo";
export default function Todo() {
  const [todos, setTodos] = useState<TodoProps["list"][]>([
    { id: "1", completed: true, content: "test" },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return <>{renderTodoList(todos)}</>;
}

function renderTodos(todos: TodoProps["list"][]) {
  return todos.map((todo: TodoProps["list"]) => {
    return (
      <label key={todo.id} className="todo-item" htmlFor={todo.id}>
        <input
          type="checkbox"
          name={todo.id}
          id={todo.id}
          checked={todo.completed}
        />
        {todo.content}
      </label>
    );
  });
}

function renderTodoList(todos: TodoProps["list"][]) {
  return <div className="todo-list">{renderTodos(todos)}</div>;
}
