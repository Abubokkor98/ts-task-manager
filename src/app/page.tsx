import TaskManager from "@/components/TaskManager";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Task Manager</h1>
      <TaskManager />
    </div>
  );
}
