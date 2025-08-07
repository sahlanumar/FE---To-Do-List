import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterStatus,
  setSearchKeyword,
} from "../../../store/slices/taskSlice";

function TaskFilter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filterStatus);

  const handleFilterChange = (status) => {
    dispatch(setFilterStatus(status));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchKeyword(e.target.value));
  };

  const getButtonClass = (status) => {
    return status === currentFilter
      ? "bg-blue-600 text-white"
      : "bg-gray-200 text-gray-700";
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <div className="flex-grow">
        <input
          type="text"
          placeholder="Cari tugas..."
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleFilterChange("all")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${getButtonClass(
            "all"
          )}`}
        >
          Semua
        </button>
        <button
          onClick={() => handleFilterChange("active")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${getButtonClass(
            "active"
          )}`}
        >
          Aktif
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${getButtonClass(
            "completed"
          )}`}
        >
          Selesai
        </button>
      </div>
    </div>
  );
}

export default TaskFilter;
