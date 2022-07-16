import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from 'redux/features/expensesSlice';

const store = configureStore({
    reducer: {
        expenses: expensesReducer
    }
});

export default store;