import { useState } from "react";
import TaskList from "../../componentes/taskList/TaskList";
import Taskform from "../../componentes/taskform/Taskform";
import "./TaskPages.css";

function TaskPages() {
  const [isVisibale, setIsVisibale] = useState(true);
  const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "learn html",
      duration: "30",
    },
    {
      _id: "2",
      title: "learn css",
      duration: "40",
    },
    {
      _id: "3",
      title: "learn js",
      duration: "70",
    },
  ]);

  const loading = false;

  function handelVisibility() {
    setIsVisibale(!isVisibale);
  }

  function addTask(title, duration) {
    const newTask = {
      _id: Math.random().toString(),
      title: title,
      duration: duration,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  }

  function updateTask(id, newTitle, newDuration) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id
          ? { ...task, title: newTitle, duration: newDuration }
          : task
      )
    );
  }

  return (
    <div>
      <button onClick={handelVisibility}> Toggle Visibility </button>
      {/* <button onClick={() => handelVisibility()}> Toggle Visibility </button>
      <button onClick={() => setIsVisibale(!isVisibale)}>
        Toggle Visibility
      </button> */}
      <Taskform addTask={addTask} />

      {loading && <div>loading..</div>}
      {!loading && isVisibale && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      )}
    </div>
  );
}

export default TaskPages;
