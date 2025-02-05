import React from 'react';
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasksData, setTasksData] = useState(TASKS);

  const updateTask = (id) => {
    setTasksData(tasksData => {
      return tasksData.map(task => {
        if (task.id == id) {
          return {
            ...task,
            isComplete: !task.isComplete
          };
        } else {
          return task;
        }
      })
    })
  }

  const deleteTask = (id) => {
    setTasksData(tasksData => {
      return tasksData.filter((task) => task.id !== id);
    })
  }

  const addTask = (newFormData) => {
    setTasksData([...tasksData, newFormData])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskForm addTask={addTask} />
        </div>
        <div>{<
          TaskList
          tasks={tasksData}
          updateTask={(id) => updateTask(id)}
          deleteTask={(id) => deleteTask(id)}
        />}</div>
      </main>
    </div>
  );
};

export default App;
