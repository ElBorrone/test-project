import React, { Component } from 'react'
import InputTask from '../../components/InputTask/InputTask';
import ListTasks from '../../components/ListTasks/ListTasks';
import TaskControls from '../../components/TaskControls/TaskControls';
import Auxiliar from '../../hoc/Auxiliar'

class ToDoList extends Component {
  state = {
    taskList: [],
    filterList: "all"
  }

  inputSubmitHandler = (event) => {
    const list = [...this.state.taskList]

    if (event.target.value.length === 0) {
      return null;
    }

    if (event.key === "Enter") {
      list.push({
        text: event.target.value,
        completed: false,
        disabled: true
      })

      this.setState({
        taskList: list
      })

      event.target.value = null
    }
  }

  editedInputHandler = (event, index) => {
    const list = [...this.state.taskList]
    list[index].text = event.target.value

    this.setState({
      taskList: list
    })
  }

  enableEditInputHandler = (index) => {
    const list = [...this.state.taskList]

    list[index].disabled = false

    this.setState({
      taskIndex: list
    })
  }

  completedAllTasksHandler = () => {
    const list = [...this.state.taskList]
    let changeCompleted = false;

    list.forEach(elem => {
      if (elem.completed === false) {
        changeCompleted = true
        return
      }
    })

    list.forEach(elem => {
      elem.completed = changeCompleted;
    })

    this.setState({
      taskList: list
    })
  }

  completedTaskHandler = (event, index) => {
    const list = [...this.state.taskList]

    list[index].completed = event.target.checked

    this.setState({
      taskList: list
    })
  }

  removeTaskHandler = (taskIndex) => {
    const list = [...this.state.taskList]

    list.splice(taskIndex, 1)

    this.setState({
      taskList: list
    })
  }

  removeAllCompletedTasksHandler = () => {
    const list = [...this.state.taskList]
      .filter(task => !task.completed)
      .map((elem) => {
        return elem
      })

    this.setState({
      taskList: list
    })
  }

  changedFilterHandler = (value) => {
    this.setState({
      filterList: value
    })
  }

  render() {
    let listShowed = null;

    if (this.state.taskList.length > 0) {
      listShowed = (
        <Auxiliar>
          <ListTasks
            tasks={this.state.taskList}
            filters={this.state.filterList}
            enableEditTask={this.enableEditInputHandler}
            deleteTask={this.removeTaskHandler}
            completedTask={this.completedTaskHandler}
            editedTask={this.editedInputHandler}
          />
          <TaskControls
            totalTasks={this.state.taskList.length}
            deleteAllTasks={this.removeAllCompletedTasksHandler}
            changedFilter={this.changedFilterHandler}
          />
        </Auxiliar>
      )
    }

    return (
      <Auxiliar>
        <InputTask
          clickedIcon={this.completedAllTasksHandler}
          submit={this.inputSubmitHandler}
        />
        {listShowed}
      </Auxiliar>
    )
  }
}

export default ToDoList;