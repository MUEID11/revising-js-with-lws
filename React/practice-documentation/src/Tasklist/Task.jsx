import { useState } from "react";

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input type="text" value={task.text} onChange={(e) => onChangeTask({
          ...task,
          text: e.target.value,
        })} />
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
          <input type="checkbox" checked={task.done} onChange={(e)=>onChangeTask({
            ...task,
            done: e.target.checked,
          })} />
          {taskContent}
          <button onClick={()=>onDeleteTask(task.id)}>delete</button>
        </label>
      </li>
    </>
  );
};

export default Task;
