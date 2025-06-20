import React, { useState } from "react";

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
    <div style={{ display: "flex", gap: 8 }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="输入待办事项后回车添加"
        style={{ padding: 4 }}
      />
      {showClearButton && (
        <button onClick={handleClear} style={{ padding: "4px 8px" }}>
          清空
        </button>
      )}
      <button onClick={handleSearch} style={{ padding: "4px 12px" }}>
        查找
      </button>
      <button onClick={handleAdd} style={{ padding: "4px 12px" }}>
        添加
      </button>
    </div>
  );
}
