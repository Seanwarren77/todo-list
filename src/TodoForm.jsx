import { useRef } from "react";

/*
 TodoForm component 

 This component handles user input for adding new todos.

 Key responsibilities:
 - Capture user input from the form
 - Prevent default form submission behavior
 - Send the new todo data to the parent component
 - Reset the form after submission
 - Keep the input focused using useRef
 */

function TodoForm ( { onAddTodo }) {
  // useRef is used to directly access the input DOM element
  // This allows us to. manually focus the input after submission
  const inputRef = useRef();

  /*
    handleAddTodo

    This function runs when the form is submitted.
    It:
      - Prevents page reload
      - Retrieves the input value
      - Calls the parent function to add a todo
      - Resets the form
      - Refocuses the input field
  */

  const handleAddTodo = (event) => {
    event.preventDefault();

    // Get and clean the input value (.trim removes extra whitespace)
    const todoTitle = event.target.todoTitle.value.trim();

    // Only add todo if input is not empty
    if (todoTitle) {
      onAddTodo(todoTitle);      // Send data to parent (App.jsx)
      event.target.reset();      // Clear the input field
      inputRef.current.focus();  // Keep cursor in input field  
    }
  }

  return (
    // onSubmit ensures both button click and Enter key work
    <form onSubmit={handleAddTodo}>
      {/* Label connected to input for accessibility */}
      <label htmlFor="todoTitle">Todo</label>

      {/* Input field for entering todo text */}
      <input 
        ref={inputRef}    // Connect ref to DOM element     
        type="text"
        id="todoTitle" 
        name="todoTitle"     // Required to access value via event
        placeholder={'Todo text'}
        required 
      />

    {/* Submit button triggers form submission */}
      <button type="submit">
        Add Todo 
        </button>
    </form>
  );
}

// Export component so it can be used in App.jsx
export default TodoForm; 