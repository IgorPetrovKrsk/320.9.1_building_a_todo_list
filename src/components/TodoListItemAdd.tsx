import styles from './todoListItem.module.css'
import {TodoListDispatchContext} from '../App'
import { useContext, useState } from 'react';



export default function TodoListItemAdd() {
    const todoListDispatchContext = useContext(TodoListDispatchContext);
    const [todo,setTodo] = useState({todo:''});
    
    function handleChange (event:React.ChangeEvent<HTMLInputElement>) {
     setTodo ({ ...todo, [event.target.name]: event.target.value });
  };
    

    return (<>
        <tr className={styles.todoListItem}>
          <td> </td>
          <td><input onChange={handleChange} type="text" name="todo" placeholder='Enter new todo'/></td>
           <td><button onClick={() => todoListDispatchContext?.({type:'ADD', payload:todo.todo})}>Add</button></td>
          </tr>
    </>
    )
}