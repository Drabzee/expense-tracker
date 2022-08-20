import axios from "axios"

export const fetchInitialState = async () => {
    const initialState = await axios.get('/api/v1/expense/initialState');
    return initialState;
}