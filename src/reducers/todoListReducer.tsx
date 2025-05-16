
import type { todoListItemInterface } from "../interfaces/todoListItemInterface";
type Action =
    | { type: 'ADD' }
    | { type: 'DELETE'; payload: todoListItemInterface }
    | { type: 'EDIT'; payload: todoListItemInterface };


export default function todoListReducer(state: todoListItemInterface[], action: Action): todoListItemInterface[] {
    switch (action.type) {
        case 'ADD':
            return state;
            break;
        case 'DELETE':
            console.log(`delete called on id ${}`);

            return state;
            break;
        case 'EDIT':
            return state;
            break;
        default:
            return state;
    }

}
