import { useState, useMemo } from "react";
import TodoHeader from "./components/todo-header";
import TodoList from "./components/todo-list";
import { useTodos } from "./hooks/useTodos";

export default function Todo() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
  const [filter, setFilter] = useState<string>("");

  const handleAdd = (content: string) => {
    addTodo(content);
  };

  const handleSearch = (searchTerm: string) => {
    setFilter(searchTerm);
  };

  const handleClear = () => {
    setFilter("");
  };

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  const handleToggle = (id: string) => {
    toggleTodo(id);
  };

  const filteredList = useMemo(() => {
    if (!filter) {
      return todos;
    }
    return todos.filter((item) =>
      item.content.toLowerCase().includes(filter.toLowerCase())
    );
  }, [todos, filter]);

  return (
    <>
      <TodoHeader
        activeFilter={filter}
        onAdd={handleAdd}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      <TodoList
        onDelete={handleDelete}
        onToggle={handleToggle}
        list={filteredList}
      />
    </>
  );
}
