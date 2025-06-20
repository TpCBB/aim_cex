import React, { useState } from "react";
import styles from "./todo-header.module.css";

interface TodoHeaderProps {
  activeFilter: string;
  onAdd: (content: string) => void;
  onSearch: (searchTerm: string) => void;
  onClear: () => void;
}

export default function TodoHeader({
  activeFilter,
  onAdd,
  onSearch,
  onClear,
}: TodoHeaderProps) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    onAdd(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    onClear();
  };

  const showClearButton = inputValue || activeFilter;

  return (
    <div className={styles.header}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="输入待办事项后回车添加"
        className={styles.input}
      />
      {showClearButton && (
        <button
          onClick={handleClear}
          className={`${styles.button} ${styles.clearButton}`}
        >
          清空
        </button>
      )}
      <button
        onClick={handleSearch}
        className={`${styles.button} ${styles.searchButton}`}
      >
        查找
      </button>
      <button
        onClick={handleAdd}
        className={`${styles.button} ${styles.addButton}`}
      >
        添加
      </button>
    </div>
  );
}
