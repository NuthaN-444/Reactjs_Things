import React from 'react'
import { UseTodoContext } from '../context/TodoContext'



const TodoLists = () => {
  const {todoList , setTodoList} = UseTodoContext();


  return (
    <div className='todo-lists-div'>
      <h1>My Todos</h1>


     {todoList && todoList.length > 0 ? (
        todoList.map((item) => (
          <div key={item.id} className="todo-item">
            <input type="checkbox" checked={item.todoCompleted}/>
            <p className='todo-title'>{item.todoTitle}</p>
            <span>{item.todoCompleted ? "✅ Done" : "⏳ Pending"}</span>
          </div>
        ))
      ) : (
        <p>No todos yet — add one above!</p>
      )}
    </div>
  )
}

export default TodoLists
