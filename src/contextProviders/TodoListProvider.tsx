import { TodoListStateContext, TodoListDispatchContext } from '../App';


const TodoListProvider = ({ children, todoList, dispatchTodoList }) => {
  return (
    <TodoListStateContext.Provider value={todoList}>
      <TodoListDispatchContext.Provider value={dispatchTodoList}>
        {children}
      </TodoListDispatchContext.Provider>
    </TodoListStateContext.Provider>
  );
};

export default TodoListProvider;
