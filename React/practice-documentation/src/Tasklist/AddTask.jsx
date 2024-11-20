import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="add text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAdd(text);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
