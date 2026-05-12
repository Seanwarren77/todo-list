import TodoListItem from "./TodoListItem";

// TodoList component is responsible for displaying all todos
function TodoList({ todoList, onCompleteTodo }) {
  // Filter out completed todos
  const filteredTodoList = todoList.filter (
    (todo) => !todo.isCompleted
  );

  return (
    filteredTodoList.length === 0 ? (
      <p>Add todo above to get started</p>
    ) : (
    <ul>
        {filteredTodoList.map(todo => (
          <TodoListItem 
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          />
        ))}
      </ul>
    )
  );
}

// Export component so App.jsx can use it
export default TodoList;

/* 
  CONDITIONAL RENDERING

  If there are no todos, display a helpful message.
  Otherwise, render the list of todos.

  This improves user experience by giving feedback when the list is empty
*/