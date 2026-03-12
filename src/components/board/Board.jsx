import BoardColumn from "./BoardColumn";
import BoardCard from "./BoardCard";
import { useTask } from "../../contexts/KanbanContext";
import { useMemo, useState } from "react";

const COLUMNS = [
  { id: "to-do", label: "To-DO" },
  { id: "in-progress", label: "In Progress" },
  { id: "done", label: "Done" },
];

const Board = () => {
  const { tasks, searchQuery, sortBy } = useTask();
  const [activeMenuId, setActiveMenuId] = useState(null);

  const processedTasks = useMemo(() => {
    let result = [...tasks];

    // 1. Filter by search
    if (searchQuery) {
      result = result.filter((t) =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (sortBy === "newest") return dateB - dateA;
      if (sortBy === "oldest") return dateA - dateB;
      return 0;
    });

    return result;
  }, [tasks, searchQuery, sortBy]);

  return (
    <div onClick={() => setActiveMenuId(null)} className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        {COLUMNS.map((col) => {
          const columnTasks = processedTasks.filter(
            (task) => task.status === col.id,
          );

          return (
            <BoardColumn
              isOpen={activeMenuId === col.id}
              onToggleMenu={() => setActiveMenuId(col.status)}
              key={col.id}
              status={col.label}
              totalCard={columnTasks.length}
            >
              {columnTasks.map((task) => (
                <BoardCard
                  isOpen={activeMenuId === task.id}
                  onToggleMenu={() => setActiveMenuId(prevId => prevId === task.id ? null : task.id)}
                  key={task.id}
                  task={task}
                />
              ))}
            </BoardColumn>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
