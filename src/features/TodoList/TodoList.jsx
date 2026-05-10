import TodoListItem from "./TodoListItem";

// TodoList component is responsible for displaying all todos
function TodoList({ todoList }) {
  return (
  
    <ul>
        {todoList.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
  );
}

// Export component so App.jsx can use it
export default TodoList;