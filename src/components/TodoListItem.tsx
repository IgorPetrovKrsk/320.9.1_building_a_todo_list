import type { todoListItemInterface } from "../interfaces/todoListItemInterface";
import { TodoListDispatchContext } from '../App'
import styles from './todoListItem.module.css'
import { useContext, useState } from "react";

interface TodoListItemProps {
  todoItem: todoListItemInterface;
}

export default function TodoListItem({ todoItem }: TodoListItemProps) {
  const todoListDispatchContext = useContext(TodoListDispatchContext);
  const [todo, setTodo] = useState({ todo: todoItem.todo });
  const [toggleEdit, setToggleEdit] = useState(false);

  function onEditClick() {
    setToggleEdit(s => s = !s);
  }
  function onCancelClick() {
    setToggleEdit(s => s = !s);
    setTodo({ ...todo, todo: todoItem.todo }); //restoring previous value
  }
  function onTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };



  return (<>
    <tr className={styles.todoListItem}>
      <td> <input onChange={() => todoListDispatchContext?.({ type: 'SWITCH', payload: todoItem })} type="checkbox" checked={todoItem.completed} /></td>
      <td>{toggleEdit ? <input  onChange={onTodoChange} type="text" name='todo' value={todo.todo} /> : todoItem.todo}</td>
      <td>{toggleEdit ? <button className={styles.btnSave} onClick={onEditClick}>Save</button> : <button onClick={onEditClick}>Edit</button>} </td>
      <td>{toggleEdit ? <button className={styles.btnCancel} onClick={onCancelClick}>Cancel</button> : <button onClick={() => todoListDispatchContext?.({ type: 'DELETE', payload: todoItem })}>Delete</button>}</td>
    </tr>
  </>
  )
}