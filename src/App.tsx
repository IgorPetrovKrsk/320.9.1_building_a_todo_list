import { useState, useReducer, createContext } from 'react'
import todoListReducer from './reducers/todoListReducer';
import testToDoList from './testData/testToDoList';
import TodoListItem from './components/ToDoListItem';
import TodoListProvider from './contextProviders/todoListProvider';
import type { todoListItemInterface } from "../interfaces/todoListItemInterface";
import './App.css'
import TodoListItemAdd from './components/TodoListItemAdd';

//creating 2 separate context I'm still on the edge should I use todoList in context or just dispatcher
export const TodoListStateContext = createContext(null);
export const TodoListDispatchContext = createContext(null);

function App() {

  const [todoList, dispatchTodoList] = useReducer(todoListReducer, testToDoList);

  //const [count, setCount] = useState(0)

  const todoListItemArray = todoList.map((it) => {
    return <TodoListItem todoItem={it} />
  })

  return (
    <>
      <TodoListProvider todoList={todoList} dispatchTodoList={dispatchTodoList}>
        <h1>Create Todo List</h1>
        <table>
          <TodoListItemAdd />
          {todoListItemArray}
        </table>
      </TodoListProvider>
    </>
  )
}

export default App
