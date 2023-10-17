import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        // redux-toolkit đã cài đặt sẵn cho ta thư viện IMMER
        // giúp cho ta viết code mutation nhưng đạt được kết quả là inmutation
        // mutation: thao tác trực tiếp lên state
        // inmutaion: tạo ra state mới dựa trên state cũ và thao thao tác trên state mới
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        }, // action creators
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        priorityFilterChange: (state, action) => {
            state.priorities = action.payload;
        }
    }
});