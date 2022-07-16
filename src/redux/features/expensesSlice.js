import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: [],
    reducers: {
        add: (state, { payload }) => {
            state.push(payload);
        },
        remove: (state, { payload }) => {
            return state.filter(item => item.id !== payload)
        }
    }
});

export default expenseSlice.reducer;
export const { add, remove } = expenseSlice.actions;