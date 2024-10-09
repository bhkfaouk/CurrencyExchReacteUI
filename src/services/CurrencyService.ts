import axios, { AxiosResponse } from 'axios';
import { CurrencyRequest, CurrencyResponse } from './types/Types'; // Adjust path if needed
import { CurrencyCode } from '../enums/CurrencyCode'; // Adjust path if needed

const apiClient = axios.create({
    baseURL: 'http://localhost:8000', // Your Spring Boot backend URL
});

export const getExchangeValue = async (currencyRequest: CurrencyRequest): Promise<CurrencyResponse> => {
    try {
        const response = await apiClient.post<CurrencyResponse>('/convert', currencyRequest);
        return response.data as CurrencyResponse;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        throw error;
    }
};
