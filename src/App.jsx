import { useState } from 'react'
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css'

const tasks = [
  { id: 1, title: 'Completed task', completed: true },
  { id: 2, title: 'Editing task', isEditing: true },
  { id: 3, title: 'Active task', completed: false },
];

function App() {
   return (
    <section className="todoapp">
      <h1 className="todoapp__title">todos</h1>
      <div className="todoapp__card">
        <NewTaskForm />
        <TaskList tasks={tasks} />
        <Footer itemsLeft={1} currentFilter="All" />
      </div>
    </section>
  );
}

export default App
