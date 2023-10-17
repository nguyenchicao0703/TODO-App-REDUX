// Redux-toolkit
// Có thể truyền thẳng reducer vào store mà không cần combineReducers(REDUX core)
// Nó tự động tích hợp các tính năng như Redux DevTools Extension
import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../component/Filters/filtersSlice";
import { todosSlice } from "../component/TodoList/todosSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todosSlice.reducer,
    }
});

export default store;
