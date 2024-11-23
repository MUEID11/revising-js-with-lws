
import AddTask from './Tasker/AddTask';
import TaskList from './Tasker/TaskList';
import TaskProvider from './Tasker/TaskContex';
export default function TaskApp() {
  

  return (
   <TaskProvider>
      <h1>Prague itinerary</h1>
      <AddTask/>
      <TaskList/>
   </TaskProvider>
      
      
  );
}

