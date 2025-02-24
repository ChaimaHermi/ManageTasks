import Task from "../task/Task";

function TaskList(props) {
  return (
    <div>
      {props.tasks.map((task) => (
        <Task
          key={task._id}
          id={task._id}
          title={task.title}
          duration={task.duration}
          deleteTask={props.deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
