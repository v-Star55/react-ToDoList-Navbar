import Form from './components/Form';
import ToDo from './components/ToDo';
import React,{useState, useEffect}from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);


  useEffect(() => {
    filterHandler();   
    saveLocalTodos();               
  } ,[todos,status]);   //this function is called everytime the todos or status changes

  useEffect(() => {
    getLocalTodos();
  
  },[]);   //this function is called only once when the app is loaded

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

  }

  // here i am saving the todos in the local storage

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));   //JSON.stringify() converts a JavaScript object or value to a JSON string
  }


  // here i am getting the todos from the local storage

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){       //checking if the todos is null or not if it is null then i am setting the todos to an empty array
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));    //JSON.parse() converts a JSON string to a JavaScript object
      setTodos(todoLocal);  //here i am setting the todos to the todoLocal
    }
  }
    
        


  return (
    <div className="App">
      <header>
      <h1>Vaibhav's Todo List</h1>
    </header>
    
    <Form inputText={inputText} setTodos={setTodos} todos={todos} setInputText={setInputText} setStatus={setStatus} />
    <ToDo filteredTodos={filteredTodos} setInputText={setInputText} setTodos={setTodos} todos={todos} />

    </div>
  );
}

export default App;
