import { useRef, useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";
import { isValidTodoTitle } from "../utils/todoValidation";



function TodoForm ( { onAddTodo }) {
 
  const inputRef = useRef();

  const [workingTodoTitle, setWorkingTodoTitle] = useState("");

  function handleTitleChange(event) {
    setWorkingTodoTitle(event.target.value);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    const trimmedTitle = workingTodoTitle.trim();

    if (isValidTodoTitle(trimmedTitle)) {

      onAddTodo(trimmedTitle);
      setWorkingTodoTitle("");

      inputRef.current.focus();
    }
  }

  return (
    // onSubmit ensures both button click and Enter key work
    <form onSubmit={handleAddTodo}>
      
      <TextInputWithLabel
        elementId="todoTitle"
        labelText="Todo"
        ref={inputRef}
        value={workingTodoTitle}
        onChange={handleTitleChange}
        />

   
      <button disabled={!isValidTodoTitle(workingTodoTitle)}>
        Add Todo 
        </button>
    </form>
  );
}


export default TodoForm; 