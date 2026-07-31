function NewTaskForm() {
  return (
    <form className="new-task-form">
      <input
        className="new-task-form__input"
        type="text"
        placeholder="What needs to be done?"
      />
    </form>
  );
}

export default NewTaskForm;