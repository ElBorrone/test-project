import React from 'react'
import ListTask from './ListTask/ListTask'
import classes from './ListTasks.module.css'

const listTasks = (props) => {
  let filteredList = null

  if (props.filters === "all") {
    filteredList = [...props.tasks]
  } else if (props.filters === "completed") {
    filteredList = [...props.tasks].filter(task => task.completed)
  } else {
    filteredList = [...props.tasks].filter(task => !task.completed)
  }

  return (
    <div className={classes.ListTasks}>
      {filteredList.map((elem, index) => {
        return <ListTask
          key={index}
          task={elem}
          doubleClicked={(event) => props.enableEditTask(event, index)}
          deleted={() => props.deleteTask(index)}
          changed={(event) => props.editedTask(event, index)}
          completed={(event) => props.completedTask(event, index)}
        />
      })}
    </div>
  )
}

export default listTasks