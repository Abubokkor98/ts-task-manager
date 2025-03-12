import React from "react";

interface TaskFormProps {
  addTask: (title: string, description: string) => void;
}

export default function TaskForm({ addTask }: TaskFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;

    if (!title.trim()) return;

    addTask(title, description);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="border p-2 w-full rounded mb-2"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="border p-2 w-full rounded mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
}
