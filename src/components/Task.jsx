import  { useState } from 'react';
function Task({ title, completed}) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <li className="task task--editing">
        <input className="task__edit-input" type="text" defaultValue={title} />
      </li>
    );
  }

  return (
    <li className={`task ${completed ? 'task--completed' : ''}`}>
      <button className="task__toggle" />
      <span className="task__title">{title}</span>
      <div className="task__actions">
        <button className="task__edit" onClick={() => setIsEditing(true)}>
          ✎
        </button>
        <button className="task__delete">✕</button>
      </div>
    </li>
  );
}

export default Task;