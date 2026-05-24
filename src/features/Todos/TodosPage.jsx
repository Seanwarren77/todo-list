import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList/TodoList';

function TodosPage({ token }) {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState('');
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      setIsTodoListLoading(true);
      setError('');

      try{
        const response = await fetch('/api/tasks', {
          headers: {
            'X-CSRF-TOKEN': token, 
          },
          credentials: 'include',
        });

        if (response.status === 401) {
          throw new Error('Unauthorized');
        }

        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }

        const data = await response.json();

        setTodoList(data.tasks);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsTodoListLoading(false);
      }
    }

    if (token) {
      fetchTodos();
    }
  }, [token]);

  async function addTodo(title) {
    const tempTodo = {
      id: Date.now(),
      title,
      isCompleted: false,
    };

 setTodoList((prev) => [...prev, tempTodo]);

 try {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'X-CSRF-TOKEN': token,
    },
    credentials: 'include',
    body: JSON.stringify({
      title,
      isCompleted: false,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to add todo');
  }

  const savedTodo = await response.json();
  setTodoList((prev) =>
  prev.map((todo) =>
  todo.id === tempTodo.id
  ? savedTodo
  : todo
  )
);
 } catch (error) {
  setTodoList((prev) =>
  prev.filter((todo) => todo.id !== tempTodo.id)
  );

  setError(error.message);
 }
  }

  async function completeTodo(id) {
    const originalTodo = todoList.find(
      (todo) => todo.id === id
    );


    setTodoList((prev) => 
    prev.map((todo) =>
    todo.id === id
     ? { ...todo, isCompleted: true }
     : todo
    )
  );

  try {
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': token,
      },
      credentials: 'include',
      body: JSON.stringify({
        isCompleted: true,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to complete todo');
    }
  } catch (error) {
    setTodoList((prev) =>
    prev.map((todo) =>
    todo.id === id ? originalTodo : todo 
    )
    );

setError(error.message);
  }
  }

  async function updateTodo(editedTodo) {
    const originalTodo = todoList.find(
      (todo) => todo.id === editedTodo.id
    );
setTodoList((prev) => 
prev.map((todo) =>
todo.id === editedTodo.id
? editedTodo
: todo
)
);

try {
  const response = await fetch(
    `/api/tasks/${editedTodo.id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
        'X-CSRF-TOKEN': token,
      },
      credentials: 'include',
      body: JSON.stringify({
        title: editedTodo.title,
        isCompleted: editedTodo.isCompleted,
      }),
    }
  );
if (!response.ok) {
      throw new Error('Failed to update todo');
    }
  } catch (error) {
    setTodoList((prev) =>
    prev.map((todo) =>
    todo.id === editedTodo.id 

    ? originalTodo
    : todo
    )
    );

    setError(error.message);
  }
}

return (
  <>
    {error && (
      <div>
        <p>{error}</p>

        <button onClick={() => setError('')}>
          Clear Error
        </button>
      </div>
    )}

    {isTodoListLoading && (
      <p>Loading todos...</p>
    )}

    <TodoForm onAddTodo={addTodo} />

    <TodoList  
      todoList={todoList}
      onCompleteTodo={completeTodo}
      onUpdateTodo={updateTodo}
       />
  </>
);
  }

export default TodosPage;

  

