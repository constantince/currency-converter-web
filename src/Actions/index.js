export const CHANGE_BASE_CURRENCY = "CHANGE_BASE_CURRENCY";
export const CHANGE_QUOTE_CURRENCY = "CHANGE_QUOTE_CURRENCY";
export const CHANGE_BASE_AMOUNT = "CHANGE_BASE_AMOUNT";
export const CHANGE_THEME_COLOR = "CHANGE_THEME_COLOR";
export const CHANGE_BASE_CURRENCY_START = "CHANGE_BASE_CURRENCY_START";
export const FETCH_ERROR = "FETCH_ERROR";
export const changeBaseCurrency = (currency, data) => ({
    type: CHANGE_BASE_CURRENCY,
    currency,
    data,
});

export const changeQuoteCurrency = currency => ({
    type: CHANGE_QUOTE_CURRENCY,
    currency
});

export const changeBaseAmount = (amount) => ({
    type: CHANGE_BASE_AMOUNT,
    amount
});

export const changeThemeColor = color => ({
    type: CHANGE_THEME_COLOR,
    color
})