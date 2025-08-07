import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);

  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        Belum ada tugas. Silakan tambahkan satu!
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
