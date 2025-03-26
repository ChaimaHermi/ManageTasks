import { useEffect, useState } from "react";

import "./Taskform.css";
function Taskform(props) {
  const [title, setTitle] = useState("learn");
  const [duration, setDuration] = useState("0");
  useEffect(() => {
    document.title = title;
    // settitle (maths.random().to string)  jamais on change un variable state sinon boucle infinie
    console.log("useeffect");
  });
  function handleSubmit(e) {
    e.preventDefault(); // bch matsirech rafraichissement lel page
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
