import React, { useState } from "react";
import TodoItem from "./components/todoItem/TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todoItem, setTodoItem] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  // add
  const handleAddTodo = (): void => {
    if (todoItem.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: todoItem,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setTodoItem("");
  };

  // toggle completed
  const handleToggleTodo = (id: number): void => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  // delete
  const handleDeleteTodo = (id: number): void => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-2 text-eva-purple-light animate-pulse">
            NERV TASK SYSTEM
          </h1>
          <div className="flex items-center justify-center gap-2 text-eva-green text-sm">
            <div className="w-2 h-2 bg-eva-green rounded-full animate-pulse"></div>
            <span>SYSTEM OPERATIONAL</span>
          </div>
        </div>

        {/* Main Container */}
        <div className="bg-eva-bg-card border-2 border-eva-purple-light/30 rounded-lg p-6 shadow-2xl">
          {/* Input Section */}
          <div className="mb-6">
            <label className="block text-eva-text-secondary text-xs uppercase tracking-wider mb-2">
              [ NEW TASK ENTRY ]
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                placeholder="Enter mission objective..."
                className="eva-input flex-1"
              />
              <button
                onClick={handleAddTodo}
                className="eva-btn-primary"
              >
                Deploy
              </button>
            </div>
          </div>

          {/* Task Counter */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <span className="text-eva-text-secondary">
              Total Tasks: <span className="text-eva-purple-light font-bold">{todoList.length}</span>
            </span>
            <span className="text-eva-text-secondary">
              Completed: <span className="text-eva-green font-bold">
                {todoList.filter(t => t.completed).length}
              </span>
            </span>
          </div>

          {/* Task List */}
          <div className="space-y-3">
            {todoList.length === 0 ? (
              <div className="text-center py-12 text-eva-text-secondary">
                <div className="text-4xl mb-2">📋</div>
                <p>No active missions</p>
                <p className="text-xs mt-1">Deploy a new task to begin</p>
              </div>
            ) : (
              todoList.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
                />
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-xs text-eva-text-secondary">
          <p className="opacity-50">MAGI SYSTEM v3.0 | EVANGELION UNIT-01</p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
