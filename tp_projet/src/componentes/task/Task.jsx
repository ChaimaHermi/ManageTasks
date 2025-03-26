import "./Task.css";
import React, { useContext, useState } from "react";
import UpdateTaskform from "../../componentes/updateTaskForm/UpdateTaskForm";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
function Task(props) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const navigate = useNavigate(); // appel hook wost composant wela lbara
  function handleClick() {
    if (props.duration >= 50) {
      // navigate("/tasks/" + props.id);
      navigate(props.id);
      //nestaamel chemin absolue
      //kif nebda hajty shnodkhel chemin absolue yebda mahajtych btasks

      //wa9teh netamel chemin relatif w aboslue wa9teh useeffect hedhy whehdy
    }
  }

  const user = useContext(UserContext);
  console.log(user);
  return (
    <div className="task" style={{ backgroundColor: "grey" }}>
      {!isUpdateMode ? (
        <>
          {/* <Link to={`/tasks/${props.id}`}>
            <div className="title">{props.title}</div>
          </Link> */}
          <div className="title" onClick={handleClick}>
            {props.title}
          </div>
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
