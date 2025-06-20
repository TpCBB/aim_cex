import { type TodoItem } from "../../../types/todo";
import TodoListItem from "./todo-list-item";

interface TodoListProps {
  list: TodoItem[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({
  list,
  onToggle,
  onDelete,
}: TodoListProps) {
  if (list.length === 0) {
    return <p>暂无待办事项，快去添加吧！</p>;
  }

  return (
    <div style={{ marginTop: 16 }}>
      {list.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
