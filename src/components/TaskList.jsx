import Task from './Task';

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} 
        {...task}
        onToggle = {() => onToggle(task.id)}
        onDelete = {() => onDelete(task.id)}
        onEdit = {(newTitle) => onEdit(task.id, newTitle)}
         />
      ))}
    </ul>
  );
}

export default TaskList;