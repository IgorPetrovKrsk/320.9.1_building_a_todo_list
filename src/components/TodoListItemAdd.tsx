import styles from './todoListItem.module.css'
import {TodoListDispatchContext} from '../App'
import { useContext } from 'react';

export default function TodoListItemAdd() {
    const todoListDispatchContext = useContext(TodoListDispatchContext);
    
    return (<>
        <tr className={styles.todoListItem}>
          <td> </td>
          <td><input type="text" id="newTodo" placeholder='Enter new todo'/></td>
          <td><button>Add</button></td>
          </tr>
    </>
    )
}