import "./Task.css";
import React, { useState } from "react";
import UpdateTaskform from "../../componentes/updateTaskForm/UpdateTaskForm";

function Task(props) {
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <div className="task" style={{ backgroundColor: "red" }}>
      {!isUpdate ? (
        <>
          <div className="title">{props.title}</div>
          <div className="title">{props.duration}</div>
          {props.details && <div className="title">{props.details.level}</div>}
          <div className="actions">
            <span onClick={() => props.deleteTask(props.id)}>Delete</span>
            <span onClick={() => setIsUpdate(true)}>Update</span>
          </div>
        </>
      ) : (
        <UpdateTaskform
          id={props.id}
          title={props.title}
          duration={props.duration}
          setIsUpdate={setIsUpdate}
          updateTask={props.updateTask}
        />
      )}
    </div>
  );
}

export default Task;
