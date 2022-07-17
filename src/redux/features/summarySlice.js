import { createSlice } from '@reduxjs/toolkit';
import { add as addExpense, remove as removeExpense } from 'redux/features/expensesSlice';

const initialState = {
    totalIncome: 0,
    totalExpense: 0
};

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addExpense().type, (state, { payload }) => {
            const { amount, type } = payload;
            if (type === 'income') state.totalIncome += amount;
            else state.totalExpense += amount;
        });
        builder.addCase(removeExpense().type, (state, { payload }) => {
            const { amount, type } = payload;
            if (type === 'income') state.totalIncome -= amount;
            else state.totalExpense -= amount;
        });
    }
});

export default summarySlice.reducer;