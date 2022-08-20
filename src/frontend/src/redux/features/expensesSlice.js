import { createSlice } from '@reduxjs/toolkit';
import { initializeState } from 'redux/actions';

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: [],
    reducers: {
        add: (state, { payload: { expense } }) => {
            state.push(expense);
        },
        remove: (state, { payload }) => {
            return state.filter(item => item.id !== payload.id)
        },
        update: (state, { payload: { expense } }) => {
            state.forEach((item, index) => {
                if(item.id === expense.id) state[index] = expense;
            })
        }
    },
    extraReducers: builder => {
        builder.addCase(initializeState.toString(), (state, { payload }) => {
            state.push(...payload.expenses);
        });
    }
});

export default expenseSlice.reducer;
export const { add, remove, update } = expenseSlice.actions;