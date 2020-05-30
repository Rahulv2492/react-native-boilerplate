import axios from 'axios';
import { serialize, retrieveData } from '../utils/helpers';
import { AUTHRIZATION_TOKEN_KEY, API_URL } from '../constants';

export const successResponse = response => {
    return {
        status: response.status,
        data: response.data,
    };
};

export const throwHttpError = (url, data, error) => {
    return { error };
};

const request = async (request, httpService = axios) => {
    const { method = 'GET', data } = request;
    let { url, headers = {} } = request;

    const authorization = await retrieveData(AUTHRIZATION_TOKEN_KEY);
    if (authorization) {
        headers = {
            ...headers,
            authorization,
        };
    }

    headers = {
        ...headers,
    };

    url = `${API_URL}${url}`;
    if (method.toUpperCase() === 'GET') {
        if (typeof data !== 'undefined') {
            url += `?${serialize(data)}`;
        }
    }

    return httpService
        .request({
            method,
            url,
            headers,
            data,
        })
        .catch(error => Promise.reject(throwHttpError(url, data, error)));
};

export default request;
