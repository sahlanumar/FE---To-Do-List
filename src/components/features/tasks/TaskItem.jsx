import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleComplete,
  editTask,
} from "../../../store/slices/taskSlice";

function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing && newTitle.trim()) {
      dispatch(editTask({ id: task.id, newTitle: newTitle.trim() }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white border-b border-gray-200 rounded-lg mb-2 shadow-sm">
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="ml-4 p-1 border border-gray-300 rounded flex-grow"
            autoFocus
          />
        ) : (
          <span
            className={`ml-4 text-gray-800 ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </span>
        )}
      </div>
      <div className="flex items-center ml-4">
        <button
          onClick={handleEdit}
          className="text-sm text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded mr-2"
        >
          {isEditing ? "Simpan" : "Edit"}
        </button>
        <button
          onClick={handleDelete}
          className="text-white bg-red-500 hover:bg-red-600 w-7 h-7 flex items-center justify-center rounded"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
