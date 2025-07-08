import axios from 'axios';
import { CurrencyRequest, CurrencyResponse } from './types/Types'; // Adjust path if needed
import {useQuery} from "@tanstack/react-query"; // Adjust path if needed

const apiClient = axios.create({
    baseURL: 'http://localhost:8100', // Your  backend URL
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

export const useExchangeValue=(currencyRequest: CurrencyRequest)=>{
    return useQuery({queryKey:[currencyRequest.sourceCurrencyCode,currencyRequest.sourceAmountToConvert],enabled:false,queryFn:async()=>{
            try {

                const response = await apiClient.post<CurrencyResponse>('/convert', currencyRequest);
                return response.data as CurrencyResponse;
            } catch (error) {
                console.error('Error fetching exchange rate:', error);
                throw error;
            }
        }})
}
