import { useState } from "react";
import { type TodoItem } from "../../../types/todo";

const initialTodos: TodoItem[] = [
  { id: "1", content: "第一件事情", completed: false },
];

export function useTodos() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);

  const addTodo = (content: string) => {
    if (content.trim() === "" || todos.some((item) => item.content === content)) {
      // 已存在则不添加（可选：给出提示）
      return;
    }
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), content: content, completed: false },
    ]);
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return { todos, addTodo, deleteTodo, toggleTodo };
} 