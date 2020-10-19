import React from 'react'
import Button from '../UI/Button/Button'
import classes from './TaskControls.module.css'

const taskControls = (props) => {
  return (
    <div className={classes.TaskControls}>
      <div className={classes.items}>
        <span>{props.totalTasks} items left</span>
      </div>
      <div className={classes.selectionButtons}>
        <Button
          btnType={'selectors'}
          clicked={() => props.changedFilter("all")}
        >All</Button>
        <Button
          btnType={'selectors'}
          clicked={() => props.changedFilter("active")}
          value="Active">Active</Button>
        <Button
          btnType={'selectors'}
          clicked={() => props.changedFilter("completed")}
          Value="Completed"
        >Completed</Button>
      </div>
      <div>
        <Button
          btnType={'clear'}
          clicked={props.deleteAllTasks}
        >Clear completed</Button>
      </div>
    </div>
  )
}

export default taskControls