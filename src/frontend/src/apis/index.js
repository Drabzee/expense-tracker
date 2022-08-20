import axios from "axios"

export const fetchInitialStateApi = async () => {
    const initialState = await axios.get('/api/v1/expense/initialState');
    return initialState;
}

export const insertExpenseApi = async ({ title, amount, type, date }) => {
    const expense = await axios.post('/api/v1/expense', {
        title, amount, type, date
    });
    return expense;
}

export const updateExpenseApi = async (id, {title, amount, type, date }) => {
    const expense = await axios.put(`/api/v1/expense/${id}`, {
        title, amount, type, date
    });
    return expense;
}

export const deleteExpenseApi = async (id) => {
    const expense = await axios.delete(`/api/v1/expense/${id}`);
    return expense;
}