import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList/TodoList';

function TodosPage() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todoTitle) {
  const newTodo = {
    id: Date.now(),     // Generate a unique id
    title: todoTitle,   // Store the todo text 
    isCompleted: false,
  };

  setTodoList((prev) => [newTodo, ...prev]);
}

function completeTodo(id) {
  setTodoList((prevTodoList) =>
   prevTodoList.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
         isCompleted: !todo.isCompleted,
        };
    }

    return todo;
  })
);
}


function updateTodo(editedTodo) {
  setTodoList((prevTodoList) =>
   prevTodoList.map((todo) => { 
    if (todo.id === editedTodo.id) {
      return {
        ...editedTodo,
      };
    }

    return todo;
  })
);
}


  return (
    <div>
      <h1>Todo List</h1>

      <TodoForm  onAddTodo={addTodo} />

  
      <TodoList  
      todoList={todoList}
      onCompleteTodo={completeTodo}
      onUpdateTodo={updateTodo}
       />

    </div>
  );
}

export default TodosPage;