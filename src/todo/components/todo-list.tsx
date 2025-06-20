import { type Todo } from "../../../types/todo";

export default function TodoList({
  list,
  onCheckBoxchange,
  onDelete
}: {
  list: Todo["list"][];
  onCheckBoxchange: (item: Todo["list"]) => void;
  onDelete: (id:string) => void;
}) {
  return (
    <>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <label htmlFor={item.id} key={item.id}>
              <input
                id={item.id}
                type="checkbox"
                onChange={() => onCheckBoxchange(item)}
                checked={item.completed}
              />
              {item.content}
              <button onClick={() => onDelete(item.id)}>删除</button>
            </label>
          </div>
        );

      })}
    </>
  );
}
