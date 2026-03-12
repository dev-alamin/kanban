import { createContext, useContext, useReducer, useState } from "react";
import initialTask from "../../data/tasks";

const TaskContext = createContext(null);
const TaskDispatchContext = createContext(null);

const KanbanContext = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTask);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const stateValue = {
    tasks,
    searchQuery,
    sortBy,
    setSearchQuery,
    setSortBy,
  };

  return (
    <TaskContext.Provider value={stateValue}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export default KanbanContext;

export function useTask() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TASK": {
      return state.filter((task) => task.id !== action.payload.id);
    }
    case "MOVE_TASK": {
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.newStatus }
          : task,
      );
    }
    default:
      return state;
  }
};
