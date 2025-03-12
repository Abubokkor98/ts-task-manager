import React from "react";
import { Task } from "./TaskManager"; 

interface TaskListProps {
  tasks: Task[];
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function TaskList({ tasks, completeTask, deleteTask }: TaskListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-4 rounded-lg shadow-md border">
          <h3 className="font-bold text-lg text-gray-800 mb-2">{task.title}</h3>
          <p className="text-gray-600 mb-3 break-words">{task.description}</p>
          <p className={`text-sm font-medium mb-3 ${task.completed ? "text-green-600" : "text-red-600"}`}>
            Status: {task.completed ? "Completed ✅" : "Incomplete ❌"}
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => completeTask(task.id)}
              className={`text-white px-3 py-1 rounded ${
                task.completed ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"
              }`}
              disabled={task.completed}
            >
              Done
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
