import { useState } from 'react';
import './App.css';
import ListTask from './components/ListTask'
import AddTask from './components/AddTask';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [task,setTask]=useState([
    { 
      id:uuidv4(),
      texte:"go home"
    },

    { id:uuidv4(),
      texte:"go back"
    }
  ])
  

  const handleAdd=(addtask)=>{
    setTask([...task,addtask])
  }

  const handleDelete=(id)=>{
    setTask(task.filter(el => el.id !== id))
  }
  return (
    <div className="App">
      <header className="App-header">
      <AddTask handleAdd={handleAdd}/>
      <ListTask task={task} handleDelete={handleDelete}/>
      </header>
    </div>
  );
}

export default App;
