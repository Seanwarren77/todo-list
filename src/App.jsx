import { useState } from "react";
import TodoForm from './features/TodoForm';
import TodoList from './features/TodoList/TodoList';
import './App.css'

function App() {
 
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
  const updatedTodos = todoList.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
         isCompleted: !todo.isCompleted,
        };
    }

    return todo;
  });

  setTodoList(updatedTodos);
}

  
function updateTodo(editedTodo) {
  const updatedTodos = todoList.map((todo) => {
    if (todo.id === editedTodo.id) {
      return {
        ...editedTodo,
      };
    }

    return todo;
  });

  setTodoList(updatedTodos);
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


export default App;
