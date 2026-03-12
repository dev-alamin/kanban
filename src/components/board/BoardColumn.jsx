import CardHeader from "./CardHeader";

const BoardColumn = ({ isOpen, onToggleMenu, status, totalCard, children }) => {
  return (
    <div className="flex-1 flex flex-col min-w-0 w-full">
      <CardHeader isOpen={isOpen} onToggleMenu={onToggleMenu} status={status} totalCard={totalCard} />

      <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
        {children}
      </div>

    </div>
  );
};

export default BoardColumn;
