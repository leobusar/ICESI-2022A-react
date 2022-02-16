import React, {useState, useEffect} from 'react'


function TaskList( {owner} ) {
  const [tasksList, setTasksList] = useState([])

  useEffect(()=>{
    let tasks =  [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      }
    ]

    setTasksList(tasks)
  },[])

  const renderTasks = () => {
      return tasksList.map(task => <li key={task.id}>{task.id} {task.title}</li> )
  }

  console.log(owner)
  return (
    <div>
        <h1>Lista de tareas de {owner.nombre} {owner.apellido} </h1>
        <ul>
            {renderTasks()}
        </ul>
        </div>
  )
}

export default TaskList