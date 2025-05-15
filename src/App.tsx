import { useState, useReducer } from 'react'
import todoListReducer from './reducers/todoListReducer';
import testToDoList from './testData/testToDoList';
import TodoListItem from './components/ToDoListItem';
import type { todoListItemInterface } from "../interfaces/todoListItemInterface";
import './App.css'




function App() {
  const [todoList, dispatchTodoList] = useReducer (todoListReducer, testToDoList);
  //const [count, setCount] = useState(0)

  const todoListItemArray = todoList.map( (it) => {
    return <TodoListItem todoItem={it}/>
  })

  return (
    <>
    <h1>Create Todo List</h1>
    {todoListItemArray}
    </>
  )
}

export default App
