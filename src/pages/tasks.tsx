import { useState } from "react";
import { prisma } from "../server/db/client";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  return (
    <div>
      <h1>Task Management</h1>
      <button onClick={fetchTasks}>Load Tasks</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
