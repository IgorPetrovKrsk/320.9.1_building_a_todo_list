
import type { todoListItemInterface } from "../interfaces/todoListItemInterface";
export type Action =
    | { type: 'ADD'; payload: string }
    | { type: 'SWITCH'; payload: todoListItemInterface }
    | { type: 'DELETE'; payload: todoListItemInterface }
    | { type: 'EDIT'; payload: todoListItemInterface };


export default function todoListReducer(state: todoListItemInterface[], action: Action): todoListItemInterface[] {
    switch (action.type) {
        case 'ADD':
            if (!action.payload.trim()) {
                alert('You cannot add blank to do item');
            } else {
                const newTodo: todoListItemInterface = {
                    userId: 1,
                    id: state.length > 0 ? Math.max(...state.map(it => it.id)) + 1 : 0,
                    todo: action.payload,
                    completed: false
                }
                return [newTodo,...state]; 
            }
            return state;
            break;
        case 'SWITCH':
            return state.map(it => {
                return it.id === action.payload.id ? { ...it, completed: !it.completed } : it;
            })
            break;
        case 'DELETE':
            if (!action.payload.completed) {
                alert('You cannot delete todo item while it is not complete');
            } else {
                state = state.filter(it => it.id !== action.payload.id); //one liner NO {}
            }
            return state;
            break;
        case 'EDIT':
            return state;
            break;
        default:
            return state;
    }

}
