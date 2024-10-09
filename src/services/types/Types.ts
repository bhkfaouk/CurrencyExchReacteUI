import {CurrencyCode} from "../../enums/CurrencyCode.ts";


export interface CurrencyRequest {
    sourceCurrencyCode: CurrencyCode;  // The currency you're converting from

    targetCurrencyCode: CurrencyCode;  // The currency you want to convert to
    sourceAmountToConvert: number;     // The amount to convert
}

export interface CurrencyResponse {
    sourceCurrencyCode: CurrencyCode;  // The currency you're converting from
    targetCurrencyCode: CurrencyCode;  // The currency you want to convert to
    targetAmountConverted: number;     // The converted amount in target currency
    serverPort: number;                // The port of the server for testing/debugging
}
