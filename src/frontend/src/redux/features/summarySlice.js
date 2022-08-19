import { createSlice } from '@reduxjs/toolkit';
import { add as addExpense, remove as removeExpense, update as updateExpense } from 'redux/features/expensesSlice';

const initialState = {
    totalIncome: 0,
    totalExpense: 0
};

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addExpense().type, (state, { payload: { expense } }) => {
            const { amount, type } = expense;
            if (type === 'income') state.totalIncome += amount;
            else state.totalExpense += amount;
        });
        builder.addCase(removeExpense().type, (state, { payload }) => {
            const { amount, type } = payload;
            if (type === 'income') state.totalIncome -= amount;
            else state.totalExpense -= amount;
        });
        builder.addCase(updateExpense().type, (state, { payload }) => {
            const {
                expense: { amount: newAmount, type: newType },
                prevAmount,
                prevType
            } = payload;

            if(prevType === 'income') state.totalIncome -= prevAmount;
            else state.totalExpense -= prevAmount;

            if(newType === 'income') state.totalIncome += newAmount;
            else state.totalExpense += newAmount;
        });
    }
});

export default summarySlice.reducer;