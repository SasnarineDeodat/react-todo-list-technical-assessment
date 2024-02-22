import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Todo = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className="h-screen bg-gray-900">
      <div className="container mx-auto max-w-xl pt-10 text-center">
        <h1 className="text-3xl font-bold mb-5 text-green-500">To-Do List</h1>
        <div className="mb-4">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTask()}
          />
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-gray-100 text-gray-900 rounded mb-2 p-2"
            >
              {task}
              <button
                onClick={() => deleteTask(index)}
                className="ml-4 bg-green-500 text-gray-900 font-semibold rounded px-3 py-1 hover:bg-green-800 transition-colors duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={addTask}
          className="px-8 p-2 bg-green-500 hover:bg-green-800 transition-colors duration-200 text-gray-900 font-semibold rounded mt-4"
        >
          Add Task
        </button>
        <Link to="/">
          <button className="bg-green-500 text-gray-900 font-semibold px-8 py-2 rounded hover:bg-green-800 transition-colors duration-200 mt-4 ml-4">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Todo;
