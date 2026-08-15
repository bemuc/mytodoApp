import  { useState } from 'react';
function Task({ title, completed, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(title);

  function startEditing(){
    setEditValue(title);
    setIsEditing(true);
  }

  function handleKeyDown(event){
    if (event.key === 'Enter') {
      const trimmed = editValue.trim();
      if(trimmed){
        onEdit(trimmed);
      }
      setIsEditing(false);
    }

  }

  if (isEditing) {
    return (
      <li className="task task--editing">
        <input className="task__edit-input" 
        type="text" 
        value={title}
        onChange = {(e) => setEditValue(e.target.value)}
        onKeyDown = {handleKeyDown}
        autoFocus 

        />
      </li>
    );
  }

  return (
    <li className={`task ${completed ? 'task--completed' : ''}`}>
      <button className="task__toggle" onClick = {onToggle} />
      <span className="task__title">{title}</span>
      <div className="task__actions">
        <button className="task__edit" onClick={startEditing}>✎</button>
        <button className="task__delete" onClick = {onDelete}>✕</button>
      </div>
    </li>
  );
}

export default Task;