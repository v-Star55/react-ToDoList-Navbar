import React, { Fragment ,useState } from 'react'

import ToDoItem from './ToDoItem'

const ToDo = (props) => {
    
  return (
    <Fragment>
        <div className="todo-container">
            
            <ul className="todo-list">
                {props.filteredTodos.map(todo => (
                    <ToDoItem key={todo.id} text={todo.text} todo={todo} todos={props.todos} setTodos={props.setTodos} />
                ))}
            </ul>
            
        </div>
    </Fragment>
  )
}

export default ToDo
