// TodoForm component will eventually allow users to add new todos
function TodoForm () {
  return (
    <form>
      {/* Label connected to the input field */}
      <label htmlFor="todoTitle">Todo</label>

      {/* Text input where the user will type a new todo */}
      <input type="text" id="todoTitle" />

      {/* Submit button (disabled for now because functionality will be added in a future lesson) */}
      <button type="submit" disabled>
        Add Todo 
        </button>
    </form>
  );
}

// Export component so it can be used in App.jsx
export default TodoForm; 