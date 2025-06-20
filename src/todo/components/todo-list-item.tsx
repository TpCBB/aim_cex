import React from "react";
import { type TodoItem } from "../../../types/todo";
import styles from "./todo-list-item.module.css";

interface TodoListItemProps {
  item: TodoItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoListItem = ({ item, onToggle, onDelete }: TodoListItemProps) => {
  const itemClass = `${styles.item} ${item.completed ? styles.completed : ""}`;

  return (
    <div className={itemClass}>
      <label htmlFor={item.id} className={styles.label}>
        <input
          id={item.id}
          type="checkbox"
          onChange={() => onToggle(item.id)}
          checked={item.completed}
          className={styles.checkbox}
        />
        <span className={styles.content}>{item.content}</span>
      </label>
      <button onClick={() => onDelete(item.id)} className={styles.deleteButton}>
        删除
      </button>
    </div>
  );
};

export default React.memo(TodoListItem); 