
import { useState, useRef } from "react";

/*
 TodoForm component 

 This component handles user input for adding new todos.

 Key responsibilities:
 - Capture user input using a controlled component
 - Prevent default form submission behavior
 - Send the new todo data to the parent component
 - Reset the form after submission
 - Maintain input focus after submission using useRef
 */

function TodoForm ( { onAddTodo }) {
  // State to control the input field value
  const [workingTodoTitle, setWorkingTodoTitle] =useState("");

// Ref to keep track of the input element for focus control
const inputRef = useRef(null);

  /*
    handleAddTodo

    This function runs when the form is submitted.
    It:
      - Prevents page reload
      - Validates input (ignores empty/whitespace)
      - Calls the parent function to add a todo
      - Clears the input field
      - Refocuses the input for better UX
  */

  const handleAddTodo = (event) => {
    event.preventDefault();



    if (workingTodoTitle.trim()) {
      onAddTodo(workingTodoTitle);      
      setWorkingTodoTitle("");     // Reset input
      inputRef.current.focus();    // Keep focus on input
    }
  };

  return (
    // onSubmit ensures both button click and Enter key work
    <form onSubmit={handleAddTodo}>
      {/* Label connected to input for accessibility */}
      <label htmlFor="todoTitle">Todo</label>

      {/* Controlled input field */}
      <input    
        ref={inputRef} 
        type="text"
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodoTitle(event.target.value)}
        placeholder={'Todo text'}
        required 
      />

    {/* Submit button (disabled if input is empty or whitespace) */}
      <button type="submit" disabled={!workingTodoTitle.trim()}>
        Add Todo 
        </button>
    </form>
  );
}

// Export component so it can be used in App.jsx
export default TodoForm; 

/* 
  CONTROLLED COMPONENT

  The input value is controlled by React state.

  Benefits:
  - React always knows the input value
  - Easier validation and control

  BUTTON DISABLE

  The button is disabled if the input is empty or only whitespace.
*/