function TodoListItem({ todo, onCompleteTodo }) {
  return ( <li>
    <input 
  type="checkbox"
  checked={todo.isCompleted}
  onChange={() => onCompleteTodo(todo.id)}
    />
    {todo.title}
    </li>
);
}

export default TodoListItem;

/*
  CHECKBOX FUNCTIONALITY

  Each todo has a checkbox that marks it as completed.

  When checked:
  = Calls onCompleteTodo with the todo id
  = Parent updates state
  = Todo disappears due to filtering
*/