import BoardActionBtn from "../ui/BoardActionBtn";
import CalendarIcon from "../ui/CalendarIcon";

const BoardCard = ({ isOpen, onToggleMenu, task }) => {
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
      data-card="wireframes"
      data-column="todo"
    >
      <BoardActionBtn isOpen={isOpen} onToggleMenu={onToggleMenu} task={task} />

      <div className="mb-3">
        <h3 className="font-semibold text-gray-900 text-sm">{task.title}</h3>
      </div>
      <p className="text-xs text-gray-600 mb-4">{task.desc}</p>
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
          {task.category}
        </span>
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-500">
        {task.date && (
          <>
            <CalendarIcon />
            {task.date}
          </>
        )}
      </div>
    </div>
  );
};

export default BoardCard;
