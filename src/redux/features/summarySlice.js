import { createSlice } from '@reduxjs/toolkit';
import { add as addExpense } from 'redux/features/expensesSlice';

const initialState = {
    totalIncome: 0,
    totalExpense: 0
};

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addExpense().type, (state, { payload }) => {
            const { amount } = payload;
            if (amount > 0) state.totalExpense += amount;
        });
    }
});

export default summarySlice.reducer;