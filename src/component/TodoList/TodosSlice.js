const initValue = [
    { id: 1, name: 'Learn React', completed: false, priority: 'High' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'Medium' },
    { id: 3, name: 'Learn Javascript', completed: true, priority: 'Low' },
]

const todoListReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        default:
            return state;
    }
}

export default todoListReducer;