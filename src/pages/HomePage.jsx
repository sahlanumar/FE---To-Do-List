import React from "react";
import AddTaskForm from "../components/features/tasks/AddTaskForm";
import TaskList from "../components/features/tasks/TaskList";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-2xl">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            My To-Do List
          </h1>
          <AddTaskForm />
          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
