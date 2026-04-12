// TodoList component is responsible for displaying all todos
function TodoList () {

  // Array that stores the todo items
  const todolist = [
  {id: 1, title: "review resources"},
  {id: 2, title: "take notes"},
  {id: 3, title: "code out app"}
]

  return (
    // Unordered list that will display each todo
    <ul>

        {/* Loop through the todoList array and render each item */}
        {todolist.map (todo => (

         {/* Key helps React track each list item efficiently */} 
        <li key ={todo.id}>{todo.title}</li>
        ))}
      </ul>
  );
}

// Export component so App.jsx can use it
export default TodoList;