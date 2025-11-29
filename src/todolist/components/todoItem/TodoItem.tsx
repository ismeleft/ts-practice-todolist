import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  item: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onToggle, onDelete }) => {
  return (
    <div
      className={`
        group relative
        bg-eva-bg-hover border-l-4
        ${item.completed ? 'border-eva-green' : 'border-eva-purple-light'}
        rounded-r-lg p-4
        transition-all duration-300
        hover:bg-eva-bg-card hover:shadow-lg
        ${item.completed ? 'opacity-60' : 'opacity-100'}
      `}
    >
      {/* Status Indicator */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-eva-purple-light to-eva-green"></div>

      <div className="flex items-center justify-between gap-4">
        {/* Left Section - Checkbox & Text */}
        <div className="flex items-center gap-3 flex-1">
          {/* Custom Checkbox */}
          <button
            onClick={() => onToggle(item.id)}
            className={`
              w-5 h-5 rounded border-2 flex items-center justify-center
              transition-all duration-300 flex-shrink-0
              ${item.completed
                ? 'bg-eva-green border-eva-green shadow-neon-green'
                : 'border-eva-purple-light hover:border-eva-green'
              }
            `}
          >
            {item.completed && (
              <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          {/* Task Text */}
          <span
            onClick={() => onToggle(item.id)}
            className={`
              flex-1 cursor-pointer transition-all duration-300
              ${item.completed
                ? 'line-through text-eva-text-secondary'
                : 'text-eva-text-primary hover:text-eva-purple-light'
              }
            `}
          >
            {item.text}
          </span>
        </div>

        {/* Right Section - Action Buttons */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Toggle Button */}
          <button
            onClick={() => onToggle(item.id)}
            className="eva-btn-success text-xs px-3 py-1"
            title={item.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {item.completed ? '↻' : '✓'}
          </button>

          {/* Delete Button */}
          <button
            onClick={() => onDelete(item.id)}
            className="eva-btn-danger text-xs px-3 py-1"
            title="Delete task"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Completion Badge */}
      {item.completed && (
        <div className="absolute -top-2 -right-2 bg-eva-green text-black text-xs px-2 py-1 rounded-full font-bold shadow-neon-green">
          COMPLETE
        </div>
      )}
    </div>
  );
};

export default TodoItem;
