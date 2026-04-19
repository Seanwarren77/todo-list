import { useState } from "react";

// Import the TodoForm component which allows users to add new todos
import TodoForm from './TodoForm.jsx';

// Import the TodoList component which displays the list of todos
import TodoList from './TodoList.jsx';

// Import CSS styles for this component
import './App.css'



// Array that stores the todo items(moved outside the component)
  const todos = [
  {id: 1, title: "Learn React"},
  {id: 2, title: "Build Todo App"},
  {id: 3, title: "Practice Components"}
];

// Main App component
function App() {
  // State to manage the list of todos
const [todoList, setTodoList] = useState(todos);
  return (

    <div>
      {/* Main heading for the application */}
      <h1>Todo List</h1>

      {/* Form component where users will eventually add new todos */}
      <TodoForm />

      {/* Component responsible for displaying all todos */}
      <TodoList  todoList={todoList} />
    
    </div>
  );
}

// Export the App component so it can be used by main.jsx
export default App
