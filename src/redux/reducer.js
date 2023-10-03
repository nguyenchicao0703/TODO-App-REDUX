import filtersReducer from "../component/Filters/FiltersSlice";
import todoListReducer from "../component/TodoList/TodosSlice";

const rootReducer = (state = {}, action) => {
    return {
        filters: filtersReducer(state.filters, action),
        todoList: todoListReducer(state.todoList, action)
    };
}

export default rootReducer;