import {useState} from 'react'
import AddTaskForm from './components/AddTaskForm.js'
import UpdateForm from './components/UpdateForm.js'
import ToDo from './components/ToDo.js'

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {

  // Managing State
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Adding a new task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let newEntry = {id: num, title: newTask, status: false}
      setToDo([...toDo, newEntry])
      setNewTask('');    
    }
  }

// Deleting a task
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks)
  }

  // When a task is done
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if(task.id === id) {
        return({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  const cancelUpdate = () => {
    setUpdateData('');
  }

  
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

// Updating and existing task
  const updateTask = ()=> {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject);
    setUpdateData('');
  }


  return (
    <div className="container App">
      <br></br>
      <h2>To Do List App</h2>
      <br></br>

        {/* Update Task */}
    {updateData && updateData ? (
      <UpdateForm
        updateData={updateData} 
        changeTask={changeTask} 
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}>        
      </UpdateForm>
        ) : (
      <AddTaskForm
        newTask={newTask} 
        setNewTask ={setNewTask}
        addTask={addTask}>
      </AddTaskForm>
    )}
    
    {toDo && toDo.length ? '' : 'No Tasks.....'}

    <ToDo
      toDo={toDo} 
      markDone={markDone}
      setUpdateData={setUpdateData} 
      deleteTask={deleteTask}>
    </ToDo>
    </div>
  );
}

export default App;
