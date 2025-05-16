import type { todoListItemInterface } from "../interfaces/todoListItemInterface";
import {TodoListDispatchContext} from '../App'
import styles from './todoListItem.module.css'
import { useContext } from "react";

interface TodoListItemProps {
  todoItem: todoListItemInterface;
}

export default function TodoListItem( {todoItem}:TodoListItemProps) {
    const todoListDispatchContext = useContext(TodoListDispatchContext);
    
    return (<>
        <tr className={styles.todoListItem}>
          <td> <input type="checkbox" checked={todoItem.completed} /></td>
          <td>{todoItem.todo}</td>
          <td><button>Edit</button></td>
          <td><button onClick={() => todoListDispatchContext?.({type:'DELETE', payload:todoItem})}>Delete</button></td>
          </tr>
    </>
    )
}