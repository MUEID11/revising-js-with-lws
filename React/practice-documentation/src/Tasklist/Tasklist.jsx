import { useState } from "react";
import AddTask from "./AddTask";
import TaskItems from "./TaskItems";
import { initialTask } from "./initialTasks";

const Tasklist = () => {
  const [task, setTask] = useState(initialTask)
  return (
    <div>
      <h1>Add your tasks</h1>
      <AddTask />
      <TaskItems tasks={task}/>
    </div>
  );
};

export default Tasklist;