import React from "react";
import TodoTextInput from "./todo-text-input";

const Header = ({ onNewItem }: { onNewItem: (text: string) => void }) => (
  <header className="header">
    <h1>BookTick</h1>
    <TodoTextInput
      initial=""
      placeholder="Which books to read?"
      onSubmit={onNewItem}
    />
  </header>
);

export default Header;
