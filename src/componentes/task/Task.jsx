import "./Task.css";
function Task(props) {
  return (
    <div className="task" style={{ backgroundColor: "red" }}>
      <div className="title">{props.title}</div>
      <div className="title">{props.duration}</div>
      {props.details && <div className="title">{props.details.level}</div>}
      <div className="actions">
        <span>Delete</span>
        <span> update </span>
      </div>
    </div>
  );
}
export default Task;
