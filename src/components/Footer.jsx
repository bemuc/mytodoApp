import TaskFilter from './TaskFilter';

function Footer({ itemsLeft, currentFilter }) {
  return (
    <footer className="footer">
      <span className="footer__count">{itemsLeft} items left</span>
      <TaskFilter currentFilter={currentFilter} />
      <button className="footer__clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;