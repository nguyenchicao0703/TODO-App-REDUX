import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn React', completed: false, priority: 'High' },
        { id: 2, name: 'Learn Redux', completed: true, priority: 'Medium' },
        { id: 3, name: 'Learn Javascript', completed: true, priority: 'Low' },
        { id: 4, name: 'Learn Java', completed: true, priority: 'High' },
        { id: 5, name: 'Learn Typescript', completed: false, priority: 'Medium' },
        { id: 6, name: 'Learn Node.js', completed: true, priority: 'Low' },
        { id: 7, name: 'Learn Futter', completed: false, priority: 'High' },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }, // action creators
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if(currentTodo)
                currentTodo.completed = !currentTodo.completed;
        }
    }
});