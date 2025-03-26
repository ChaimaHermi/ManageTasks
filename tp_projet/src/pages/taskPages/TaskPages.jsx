import { useEffect, useState } from "react";
import TaskList from "../../componentes/taskList/TaskList";
import Taskform from "../../componentes/taskform/Taskform";
import "./TaskPages.css";
import * as api from "../../services/tasks.service";
function TaskPages() {
  const [isVisibale, setIsVisibale] = useState(true);
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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

  // 2ème forme de useEffect

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const result = await api.fetchTasks();
        setTasks(result);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  const [searchValue, setSearchValue] = useState("");

  // 3ème forme de useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     if (searchValue.length === 0) {
  //       console.log("tasks empty");
  //       setTasks([]);
  //       setLoading(false);
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue);
  //       console.log("tasks form api : " + searchValue);
  //       setTasks(result);
  //       setLoading(false);
  //     }
  //   };
  //   console.log("searchValue", searchValue);
  //   fetchData();
  // }, [searchValue]);

  // 4ème forme de useEffect
  // useEffect(() => {
  //   let didCancel = false; // kifma flag taref estce que donne jeya men backend obsolete wwela le
  //   const fetchData = async () => {
  //     setLoading(true);
  //     if (!searchValue) {
  //       setTasks([]);
  //       setLoading(false);
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue);
  //       if (!didCancel) {
  //         console.log("result: ", searchValue);

  //         setTasks(result);
  //         setLoading(false);
  //       }
  //     }
  //   };
  //   // console.log("useEffect:", searchValue)
  //   fetchData();

  //   return () => {
  //     console.log("cleanup: ", searchValue);
  //     didCancel = true;
  //   };
  // }, [searchValue]);

  return (
    <div>
      <button onClick={handelVisibility}> Toggle Visibility </button>
      {/* <button onClick={() => handelVisibility()}> Toggle Visibility </button>
      <button onClick={() => setIsVisibale(!isVisibale)}>
        Toggle Visibility
      </button> */}{" "}
      <input
        type="text"
        name="title"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />{" "}
      <Taskform addTask={addTask} />
      {loading && <div>loading..</div>}
      {error && <div> error..</div>}
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
