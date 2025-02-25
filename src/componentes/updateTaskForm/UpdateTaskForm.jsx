import React, { useState } from "react";

function Taskform(props) {
  const [newTitle, setNewTitle] = useState(props.title);
  const [newDuration, setNewDuration] = useState(props.duration);
  function handleSubmit(e) {
    e.preventDefault();
    props.updateTask(props.id, newTitle, newDuration);
    props.setIsUpdate(false);
  }
  return (
    <div className="form">
      <form action="" className="form " onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="number"
          name="duration"
          value={newDuration}
          onChange={(e) => setNewDuration(Number(e.target.value))}
        />
        <button type="submit">validate</button>
      </form>
    </div>
  );
}
export default Taskform;
