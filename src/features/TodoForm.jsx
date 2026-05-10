import { useRef } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";



function TodoForm ( { onAddTodo }) {
  // useRef is used to directly access the input DOM element
  // This allows us to. manually focus the input after submission
  const inputRef = useRef();

  

  const handleAddTodo = (event) => {
    event.preventDefault();


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
      
      <TextInputWithLabel
        elementId="todoTitle"
        labelText="Todo"
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={handleAddTodo}
        />

   
      <button type="submit">
        Add Todo 
        </button>
    </form>
  );
}


export default TodoForm; 