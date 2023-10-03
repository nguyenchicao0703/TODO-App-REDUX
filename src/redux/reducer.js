const initValue = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        { id: 1, name: 'Learn React', completed: false, priority: 'High' },
        { id: 2, name: 'Learn Redux', completed: true, priority: 'Medium' },
        { id: 3, name: 'Learn Javascript', completed: true, priority: 'Low' },
    ]
}

const rootReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'filters/searchFilterChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        default:
            return state;
    }
}

export default rootReducer;