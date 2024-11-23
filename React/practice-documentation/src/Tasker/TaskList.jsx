import { useContext } from "react";
import { TaskContext } from "./TaskContex";
import Task from "./Task";

export default function TaskList() {
  const tasks = useContext(TaskContext);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
