import React,{useId, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddTask = (props) => {
    const[newtext,setNewText]=useState({
        texte:"" 
       })

       const handleChange=(e)=>{
        setNewText({...newtext,[e.target.name]:e.target.value})
       }
       const handlesave=()=>{
        props.handleAdd({...newtext,id:uuidv4(),})
        }
  return (
    <div>
        
    <input type="text" placeholder='todo' name="texte" onChange={handleChange}/>
     <button onClick={handlesave}>Add Task</button>
    
    </div>
  )
}

export default AddTask