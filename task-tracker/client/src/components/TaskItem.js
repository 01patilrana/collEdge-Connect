import React from 'react';

function TaskItem({ task, updateTaskStatus, deleteTask }) {
  const handleStatusChange = (e) => {
    updateTaskStatus(task._id, e.target.value);
  };

  const handleDelete = () => {
    deleteTask(task._id);
  };

  return (
    <div className="border p-4 mb-2 rounded flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        <p>Status: {task.status}</p>
      </div>
      <div>
        <select value={task.status} onChange={handleStatusChange} className="border p-1 mr-2">
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={handleDelete} className="bg-red-500 text-white p-1 rounded">Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
