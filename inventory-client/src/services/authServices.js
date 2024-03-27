import invAxios from "../common/axios";

const AUTH_TOKEN_KEY = 'inv-auth-token';

const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_KEY);

const setAuthToken = (token) => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.setItem(AUTH_TOKEN_KEY, token);
}

const hasToken = () => Boolean(getAuthToken());

const login = async ({ email, password}) => {
    const res = await invAxios.post('/login', { email, password});
    const { accessToken } = res.data;
    setAuthToken(accessToken);
}

export const AuthServices = {
    getAuthToken,
    setAuthToken,
    hasToken,
    login,
}