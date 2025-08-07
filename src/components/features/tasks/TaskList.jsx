import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskItem from "./TaskItem";
import { reorderTasks } from "../../../store/slices/taskSlice";

function TaskList() {
  const { tasks, filterStatus, searchKeyword } = useSelector(
    (state) => state.tasks
  );
  const dispatch = useDispatch();

  const filteredTasks = tasks
    .filter((task) => {
      if (filterStatus === "completed") return task.completed;
      if (filterStatus === "active") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    if (filterStatus !== "all" || searchKeyword !== "") return;

    dispatch(
      reorderTasks({
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index,
      })
    );
  };

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8 py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <p className="mt-2 font-semibold">Tidak ada tugas</p>
        <p className="text-sm">
          Silakan tambahkan tugas baru atau ubah filter Anda.
        </p>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-2"
          >
            {filteredTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskItem task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TaskList;
