import { useState } from 'react'
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css'

const tasks = [
  { id: 1, title: 'Completed task', completed: true },
  { id: 2, title: 'Editing task', completed: true },
  { id: 3, title: 'Active task', completed: false },
];

function App() {
  const[tasks, setTasks] = useState(tasks);

  function toggleTask(id){
    setTasks(tasks.map((task) =>
  task.id === id ? { ...task, completed: !task.completed} : task
  ));
  }

  function deleteTask(id){
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id, newTitle) {
    setTasks(tasks.map((task)=>
    task.id === id ? { ...task, title: newTitle }: task 
  ));
  }

  const itemsLeft = tasks.filter((task) => !task.completed).length;


   return (
    <section className="todoapp">
      <h1 className="todoapp__title">todos</h1>
      <div className="todoapp__card">
        <NewTaskForm />
        <TaskList 
        tasks={tasks} 
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}

        />
        <Footer itemsLeft={itemsLeft} currentFilter="All" />
      </div>
    </section>
  );
}

export default App
