const initValue = {
    search: '',
    status: 'All',
    priorities: []
}

export const filtersReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload
            }
        case 'filters/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/prioritiesFilterChange':
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state;
    }
}

export default filtersReducer;