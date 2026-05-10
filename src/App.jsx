import { useState } from "react";
import TodoForm from './features/TodoForm';
import TodoList from './features/TodoList/TodoList';
import './App.css'

/*
  App Component

  This is the main parent component of the application

  Responsibilities:
  - Store and manage the list of todos using state
  - Provide a function to add new todos
  - Pass data and functions to child components via props
*/

function App() {
  // State to manage the list of todos
  // Starts as an empty array so users can add their own todos
const [todoList, setTodoList] = useState([]);

/* 
  addTodo Function

  This function is passed down to the TodoForm component.

  It:
  - Receives a todo title from the child component
  - Creates a new todo object with a unique id
  - Updates the state using a functional update
*/

function addTodo(todoTitle) {
  const newTodo = {
    id: Date.now(),     // Generate a unique id
    title: todoTitle,   // Store the todo text 
  };

  // Add new todo to the beginning of the list
  // Functional update ensures we use the latest state
  setTodoList((prev) => [newTodo, ...prev]);
}

  return (

    <div>
      {/* Main heading for the application */}
      <h1>Todo List</h1>

      {/* 
        TodoForm Component
        - Receives addTodo function as a prop
        - Sends user input back up to App (child => parent communication)
        */}
      <TodoForm  onAddTodo={addTodo} />

      {/* TodoList Component  
      
        - Receives the todoList state as a prop
        - Responsible for rendering all todo items
      */}
      <TodoList  todoList={todoList} />
    
    </div>
  );
}

// Export the App component so it can be used by main.jsx
export default App
