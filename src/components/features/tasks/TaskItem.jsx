import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../../../store/slices/taskSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white border-b border-gray-200 rounded-lg mb-2 shadow-sm">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span
          className={`ml-4 text-gray-800 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="text-gray-400 hover:text-red-500 font-bold transition-colors"
      >
        X
      </button>
    </div>
  );
}

export default TaskItem;
