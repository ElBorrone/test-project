import React from 'react'
import classes from './InputTask.module.css'

const inputTask = (props) => {
  return (
    <div className={classes.InputTask}>
      <i onClick={props.clickedIcon} className='material-icons'>keyboard_arrow_down</i>
      <input
        type="text"
        placeholder='What needs to be done?'
        onKeyPress={props.submit}
      />
    </div>
  )
}

export default inputTask