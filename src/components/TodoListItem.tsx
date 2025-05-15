import type { todoListItemInterface } from "../interfaces/todoListItemInterface";

interface TodoListItemProps {
  todoItem: todoListItemInterface;
}

export default function TodoListItem( {todoItem}:TodoListItemProps) {
    return (<>
        <li>{todoItem.todo}</li>
    </>
    )
}