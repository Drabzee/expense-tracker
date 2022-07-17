import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: [],
    reducers: {
        add: (state, { payload }) => {
            state.push(payload);
        },
        remove: (state, { payload }) => {
            return state.filter(item => item.id !== payload.id)
        },
        update: (state, { payload }) => {
            state.forEach((item, index) => {
                if(item.id === payload.id) state[index] = payload;
            })
        }
    }
});

export default expenseSlice.reducer;
export const { add, remove, update } = expenseSlice.actions;