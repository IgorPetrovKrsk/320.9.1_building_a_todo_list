import styles from './todoListItem.module.css'

export default function TodoListItemAdd() {
    return (<>
        <tr className={styles.todoListItem}>
          <td> </td>
          <td><input type="text" id="newTodo" placeholder='Enter new todo'/></td>
          <td><button>Add</button></td>
          </tr>
    </>
    )
}