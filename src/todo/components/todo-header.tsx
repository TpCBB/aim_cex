import React, { useRef } from "react";

interface TodoHeaderProps {
  msg: string;
  setMsg: (value: string) => void;
  search: () => void;
  clear: () => void;
  add: () => void;
}

export default function TodoHeader({ msg, setMsg, search, clear, add }: TodoHeaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <input
        ref={inputRef}
        type="text"
        value={msg}
        onChange={e => setMsg(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="请输入关键词搜索待办事项"
        style={{  padding: 4 }}
      />
      {msg && (
        <button onClick={clear} style={{ padding: "4px 8px" }}>清空</button>
      )}
      <button onClick={search} style={{ padding: "4px 12px" }}>查找</button>
      <button onClick={add} style={{ padding: "4px 12px" }}>添加</button>
    </div>
  );
}
