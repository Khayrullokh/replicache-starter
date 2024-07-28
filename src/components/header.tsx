import React from "react";
import TodoTextInput from "./todo-text-input";

const Header = ({ onNewItem }: { onNewItem: (text: string) => void }) => (
  <header className="header">
    <h1>BookTick</h1>
    <h2>There you can put books you want to read. After reading them you can delete and add new ones to the list</h2>
    <TodoTextInput
      initial=""
      placeholder="Which books to read?"
      onSubmit={onNewItem}
    />
  </header>
);

export default Header;
