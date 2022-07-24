import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from 'redux/features/expensesSlice';
import summaryReducer from 'redux/features/summarySlice';

const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        summary: summaryReducer
    }
});

export default store;