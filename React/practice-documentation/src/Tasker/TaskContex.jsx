import { createContext, useContext, useReducer } from "react";
import { initialTasks } from "./initialTask";
import { tasksReducer } from "./TaskReducer";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);
export function useTasks() {
  return useContext(TaskContext);
}

export function useDispatch() {
  return useContext(TaskDispatchContext);
}

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
