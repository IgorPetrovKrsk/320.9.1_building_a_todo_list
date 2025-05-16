
import type { todoListItemInterface } from "../interfaces/todoListItemInterface";
export type Action =
    | { type: 'ADD'; payload: string }
    | { type: 'DELETE'; payload: todoListItemInterface }
    | { type: 'EDIT'; payload: todoListItemInterface };


export default function todoListReducer(state: todoListItemInterface[], action: Action): todoListItemInterface[] {
    switch (action.type) {
        case 'ADD':
            console.log(`add called on object: ${action.payload}`);
            return state;
            break;
        case 'DELETE':
            console.log(`delete called on object: ${action.payload.todo}`);
            return state;
            break;
        case 'EDIT':
            return state;
            break;
        default:
            return state;
    }

}
