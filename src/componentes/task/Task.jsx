import "./Task.css";
import React, { useState } from "react";
import UpdateTaskform from "../../componentes/updateTaskForm/UpdateTaskForm";
import { Link } from "react-router-dom";

function Task(props) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  return (
    <div className="task" style={{ backgroundColor: "grey" }}>
      {!isUpdateMode ? (
        <>
          <Link to={`/tasks/${props.id}`}>
            <div className="title">{props.title}</div>
          </Link>
          <div className="title">{props.duration}</div>
          {props.details && <div className="title">{props.details.level}</div>}
          <div className="actions">
            <span onClick={() => props.deleteTask(props.id)}>Delete</span>
            <span onClick={() => setIsUpdateMode(true)}>Update</span>
          </div>
        </>
      ) : (
        <UpdateTaskform
          id={props.id}
          title={props.title}
          duration={props.duration}
          setIsUpdateMode={setIsUpdateMode}
          updateTask={props.updateTask}
        />
      )}
    </div>
  );
}

export default Task;
