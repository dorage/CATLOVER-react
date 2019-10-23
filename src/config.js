export const API_URL =
    process.env.REACT_APP_MODE === 'deployment'
        ? process.env.REACT_APP_API_URL
        : process.env.REACT_APP_API_URL_LOCAL;

export const nothing = null;
