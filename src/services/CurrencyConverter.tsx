import React, { useState } from 'react';
import { CurrencyRequest } from './types/Types';
import { CurrencyCode } from '../enums/CurrencyCode';
import { getExchangeValue } from './CurrencyService';

const CurrencyConverter: React.FC = () => {
    const [amount, setAmount] = useState<number>(1);
    const [fromCurrency, setFromCurrency] = useState<CurrencyCode>(CurrencyCode.USD);
    const [toCurrency, setToCurrency] = useState<CurrencyCode>(CurrencyCode.EUR);
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

    const handleConvert = async () => {
        const currencyRequest: CurrencyRequest = {
            sourceCurrencyCode: fromCurrency,
            targetCurrencyCode: toCurrency,
            sourceAmountToConvert: amount,
        };

        try {
            const response = await getExchangeValue(currencyRequest);
            setConvertedAmount(response.targetAmountConverted);
        } catch (error) {
            console.error('Error converting currency:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-grey-300  shadow-lg rounded-lg  mt-12  ">
            <h1 className="text-3xl font-bold mb-8 text-center ">Real Time Currency Converter</h1>

            {/* Input Section */}
            <div className="flex flex-col gap-6 ">
                {/* Input Amount and From Currency */}
                <div className="flex items-center border-2 border-blue-300 rounded-lg overflow-hidden">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                        placeholder="Amount"
                        className="w-2/3 p-4 text-2xl border-none focus:outline-none"
                    />
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value as CurrencyCode)}
                        className="w-1/3 p-4 text-2xl border-l-2 border-blue-300 focus:outline-none bg-gray-50"
                    >
                        {Object.values(CurrencyCode).map(currency => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>



                {/* Converted Amount and To Currency */}
                <div className="flex items-center border-2 border-green-300 rounded-lg overflow-hidden">
                    <div className="w-2/3 p-4 text-2xl ">
                        {convertedAmount !== null ? convertedAmount : 'Result '}
                    </div>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value as CurrencyCode)}
                        className="w-1/3 p-4 text-2xl border-l-2 border-green-300 focus:outline-none bg-gray-50"
                    >
                        {Object.values(CurrencyCode).map(currency => (
                            <option key={currency} value={currency} >{currency}</option>
                        ))}
                    </select>
                </div>

                {/* Convert Button */}
                <button
                    onClick={handleConvert}
                    className="w-full bg-blue-400 text-white p-4 rounded-lg text-2xl hover:bg-blue-700 transition-colors duration-200"

                >
                    Convert

                </button>
            </div>
        </div>
    );
};

export default CurrencyConverter;
