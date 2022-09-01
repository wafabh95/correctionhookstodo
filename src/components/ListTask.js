import React,{useState} from 'react'

const ListTask = ({task,handleDelete}) => {
 
  return (
    <div>
        {task.length?task.map(elm=>
        <div>
          {elm.id}
        - {elm.texte}
        <button onClick={()=>handleDelete(elm.id)}>Delete</button>
        </div>
        ):<p>not found</p>}
    </div>
  )
}

export default ListTask