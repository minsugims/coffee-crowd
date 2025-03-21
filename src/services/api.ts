import axios from "axios";

const API_URL = "http://localhost:5279/api";

export const getCoffeeBeans = async () => {
    const response = await axios.get(`${API_URL}/CoffeeBean`);
    return response.data;
};

export const submitCoffeeBean = async (bean: { name: string; origin: string }) => {
    const response = await axios.post(`${API_URL}/CoffeeBean`, bean);
    return response.data;
};