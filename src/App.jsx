// Import the TodoForm component which displays the list of todos
import TodoForm from './TodoForm.jsx';

// Import the TodoList component which displays the list of todos
import TodoList from './TodoList.jsx';

// Import CSS styles for this component
import './App.css'

// Main App component
function App() {

  return (
    <div>
      {/* Main heading for the application */}
      <h1>Todo List</h1>

      {/* Form component where users will eventually add new todos */}
      <TodoForm />

      {/* Component responsible for displaying all todos */}
      <TodoList />
      
    </div>
  )
}

// Export the App component so it can be used by main.jsx
export default App
