import axios from "axios"

export const fetchInitialState = async () => {
    const initialState = await axios.get('/api/v1/expense/initialState');
    return initialState;
}

export const insertExpense = async ({ title, amount, type, date }) => {
    const expense = await axios.post('/api/v1/expense', {
        title, amount, type, date
    });
    return expense;
}