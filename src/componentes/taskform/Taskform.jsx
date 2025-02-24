import { useState } from "react";
import "./Taskform.css";
function Taskform(props) {
  const [title, setTitle] = useState("learn");
  const [duration, setDuration] = useState("0");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    props.addTask(title, duration);
  }
  return (
    <div className="form">
      <form action="" className="form " onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
        <button type="submit">Add a task</button>
      </form>
    </div>
  );
}
export default Taskform;
