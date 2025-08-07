import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks, filterStatus, searchKeyword } = useSelector(
    (state) => state.tasks
  );

  const filteredTasks = tasks
    .filter((task) => {
      if (filterStatus === "completed") return task.completed;
      if (filterStatus === "active") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

  if (filteredTasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        Tidak ada tugas yang cocok.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
