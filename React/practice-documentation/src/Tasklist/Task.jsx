import { useState } from "react";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input type="text" />
        <button onClick={() => setIsEditing(false)}>save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <li>
        <label>
          <input type="checkbox" />
          {taskContent}
          <button>delete</button>
        </label>
      </li>
    </>
  );
};

export default Task;
