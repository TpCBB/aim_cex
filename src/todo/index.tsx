import { useState, useEffect } from "react";
import { type Todo } from "../../types/todo";
import TodoHeader from "./components/todo-header";
import TodoList from "./components/todo-list";
export default function Todo() {
  const [msg, setMsg] = useState<string>("");
  const [list, setList] = useState<Todo["list"][]>([
    { id: "1", content: "第一件事情", completed: false },
  ]);
  const [filterList, setFilterList] = useState<Todo["list"][]>([]);
  const clear = () => {
    setMsg("");
    setFilterList(list);
  };

  const search = () => {
    // 过滤todos
    if (msg) {
      setFilterList(list.filter((item) => item.content.includes(msg)));
    } else {
      setFilterList(list);
    }
  };

  const add = () => {
    if (msg === "" || list.some((item) => item.content === msg)) {
      // 已存在则不添加（可选：给出提示）
      return;
    }
    setList([
      ...list,
      { id: String(list.length + 1), content: msg, completed: false },
    ]);
  };
  const onDelete = (id: string) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }
  const onCheckBoxchange = (listItem: Todo["list"]) => {
    setList(
      list.map((item) => {
        if (item.id === listItem.id) item.completed = !item.completed;
        return item;
      })
    );
  };
  useEffect(() => {
    setFilterList(list);
  }, [list]);
  
  return (
    <>
      <TodoHeader
        msg={msg}
        setMsg={setMsg}
        search={search}
        clear={clear}
        add={add}
      />
      <TodoList onDelete={onDelete} onCheckBoxchange={onCheckBoxchange} list={filterList} />
    </>
  );
}
