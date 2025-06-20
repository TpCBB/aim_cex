import React from "react";
import { type TodoItem } from "../../../types/todo";

interface TodoListItemProps {
  item: TodoItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoListItem = ({ item, onToggle, onDelete }: TodoListItemProps) => {
  return (
    <div>
      <label htmlFor={item.id}>
        <input
          id={item.id}
          type="checkbox"
          onChange={() => onToggle(item.id)}
          checked={item.completed}
        />
        <span
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            margin: "0 8px",
          }}
        >
          {item.content}
        </span>
      </label>
      <button onClick={() => onDelete(item.id)}>删除</button>
    </div>
  );
};

export default React.memo(TodoListItem); 