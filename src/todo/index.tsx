import { useState, useMemo } from "react";
import { type TodoItem } from "../../types/todo";
import TodoHeader from "./components/todo-header";
import TodoList from "./components/todo-list";
import { useTodos } from "./hooks/useTodos";

export default function Todo() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const search = () => {
    setFilter(inputValue);
  };

  const clear = () => {
    setInputValue("");
    setFilter("");
  };

  const add = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  const onDelete = (id: string) => {
    deleteTodo(id);
  };

  const onCheckBoxchange = (listItem: TodoItem) => {
    toggleTodo(listItem.id);
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
        msg={inputValue}
        setMsg={setInputValue}
        search={search}
        clear={clear}
        add={add}
      />
      <TodoList
        onDelete={onDelete}
        onCheckBoxchange={onCheckBoxchange}
        list={filteredList}
      />
    </>
  );
}
