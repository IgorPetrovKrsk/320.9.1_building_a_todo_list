import type { todoListItemInterface } from "../interfaces/todoListItemInterface";
import styles from './todoListItem.module.css'

interface TodoListItemProps {
  todoItem: todoListItemInterface;
}

export default function TodoListItem( {todoItem}:TodoListItemProps) {
    return (<>
        <tr className={styles.todoListItem}>
          <td> <input type="checkbox" checked={todoItem.completed} /></td>
          <td>{todoItem.todo}</td>
          <td><button>Edit</button></td>
          <td><button>Delete</button></td>
          </tr>
    </>
    )
}