import React from 'react'
import TaskItem from './TaskItem'

const ToDoList = ({tasks, deleteTask}) => {
  return (
    <ul>
      {tasks.map(t =>(
        <TaskItem key={t.id} task={t} deleteTask={deleteTask}></TaskItem>
      ))}
    </ul>
  )
}

export default ToDoList
