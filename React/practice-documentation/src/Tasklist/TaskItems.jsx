import Task from "./Task";

const TaskItems = ({tasks}) => {

  return (
    <>
      <ul>
        {tasks.map(task => <Task key={task.id} task={task} />)}
      </ul>
    </>
  );
};

export default TaskItems;
