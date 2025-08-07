import React from "react";
import { useSelector } from "react-redux";
import AddTaskForm from "../components/features/tasks/AddTaskForm";
import TaskList from "../components/features/tasks/TaskList";
import Loader from "../components/common/Loader";
import TaskFilter from "../components/features/tasks/TaskFilter";
import ClockWidget from "../components/features/widgets/ClockWidget";

function HomePage() {
  const isTaskLoading = useSelector((state) => state.tasks.isLoading);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-2xl">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <ClockWidget />
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            My To-Do List
          </h1>
          <TaskFilter />
          <AddTaskForm />
          {isTaskLoading && <Loader />}
          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
