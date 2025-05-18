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

  function onSaveClick() {
    if (!todo.todo.trim()) {
      alert('You cannot edit todo item to blank. Use delete.');
    } else {
      todoListDispatchContext?.({ type: 'EDIT', payload: { ...todoItem, todo: todo.todo } }) //dispatch expecting todoItem object so spreading the old todoItem and changing todo field to the todo from useState
      setToggleEdit(s => s = !s);
    }
  }

  return (<>
    <tr className={styles.todoListItem}>
      <td> <input onChange={() => todoListDispatchContext?.({ type: 'SWITCH', payload: todoItem })} type="checkbox" checked={todoItem.completed} /></td>
      <td>{toggleEdit ? <input onChange={onTodoChange} type="text" name='todo' value={todo.todo} /> : todoItem.todo}</td>
      <td>{toggleEdit ? <button className={styles.btnSave} onClick={onSaveClick}>Save</button> : <button onClick={onEditClick}>Edit</button>} </td>
      <td>{toggleEdit ? <button className={styles.btnCancel} onClick={onCancelClick}>Cancel</button> : <button onClick={() => todoListDispatchContext?.({ type: 'DELETE', payload: todoItem })}>Delete</button>}</td>
    </tr>
  </>
  )
}