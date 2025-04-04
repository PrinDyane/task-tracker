import React, {useState} from 'react';
import './App.css';

//main component 
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

//types in the input
const whenTyping = (event) => {
  setTaskText(event.target.value);
};

//Add task
const addNewTask = () => {
  if (taskText.trim() !== '') {
    setTasks([...tasks, taskText]);
    setTaskText('');
  }
};

//Remove index

const deleteTask = (indexToRemove) => {
  const updatedTasks = tasks.filter((_,index) => index !== indexToRemove);
  setTasks(updatedTasks);
};

return (
  <div className="app">
    <h1>My Tasks</h1>

    <div className="task-input">
      <input 
        type="text" 
        placeholder="Write a task" 
        value={taskText} 
        onChange={whenTyping}
      />
      <button onClick={addNewTask}>Add</button>
    </div>

    <ul className="task-list">
      {tasks.map((task, index)=>(
        <li key={index}>
          {task}{''}
          <button onclick={() => deleteTask(index)} className="delete-button">
            x
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
}  

export default App;
