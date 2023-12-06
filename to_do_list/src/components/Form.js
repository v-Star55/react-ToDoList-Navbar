import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Form = (props) => {
  


  const inputTextHandler = (e) => {
    var inputText = e.target.value;

      props.setInputText(inputText);
  };

 

  
  const submitToDoHandler = (e) => {
    e.preventDefault();   //prevents the page from refreshing

    if(props.inputText === ""){
      alert("Please Enter a ToDo");
      return;
    }

    props.setTodos([
      ...props.todos, {text: props.inputText, completed: false ,id: Date.now()}
    ]);
    

    props.setInputText("");

  };

  const statusHandler = (e) => {
    console.log(e.target.value);
    props.setStatus(e.target.value);
  };




  return (
    <Fragment>
      <form>
      <input value={props.inputText}  onChange={inputTextHandler} placeholder='What is the task today?' type="text" className="todo-input" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
      <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </Fragment>
  )
}

export default Form
