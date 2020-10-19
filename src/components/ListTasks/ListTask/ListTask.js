import React from 'react'
import classes from './ListTask.module.css'

const listTask = (props) => {
  return (
    <div
      className={classes.ListTask}
      onDoubleClick={props.doubleClicked}
    >
      <label>
        <input
          type="checkbox"
          onChange={props.completed}
          checked={props.task.completed}
        />
        <span></span>
      </label>
      <input type="text"
        disabled={props.task.disabled}
        onChange={props.changed}
        value={props.task.text}
      />
      <i
        className="material-icons"
        onClick={props.deleted}
      >clear</i>
    </div>
  )
}

export default listTask