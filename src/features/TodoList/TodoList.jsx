import TodoListItem from "./TodoListItem";

// TodoList component is responsible for displaying all todos
function TodoList({
   todoList,
   onCompleteTodo,
   onUpdateTodo,
   }) 
   {
  return (
  
    <ul>
        {todoList.map(todo => (
          <TodoListItem
          key={todo.id}
           todo={todo}
           onCompleteTodo={onCompleteTodo}
           onUpdateTodo={onUpdateTodo}
            />
        ))}
      </ul>
  );
}

// Export component so App.jsx can use it
export default TodoList;