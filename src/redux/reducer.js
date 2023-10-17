import filtersReducer from "../component/Filters/filtersSlice";
import todoListReducer from "../component/TodoList/todosSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
});

export default rootReducer;