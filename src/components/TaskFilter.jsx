function TaskFilter({ currentFilter }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <ul className="tasks-filter">
      {filters.map((label) => (
        <li key={label}>
          <button
            className={`tasks-filter__button ${
              currentFilter === label ? 'tasks-filter__button--selected' : ''
            }`}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskFilter;