import AsyncStorage from '@react-native-community/async-storage';
import * as Promise from 'bluebird';

const catchLogThrow = err => {
    console.error(err);
    return Promise.reject(err);
};

const storeData = obj => {
    return Promise.map(Object.keys(obj), key =>
        AsyncStorage.setItem(key, obj[key]),
    ).catch(catchLogThrow);
};

const retrieveData = key => {
    return AsyncStorage.getItem(key).catch(catchLogThrow);
};

const createRequestTypes = base => {
    const requestStatus = ['REQUESTING', 'SUCCESS', 'FAILED', 'INVALIDATE'];

    return requestStatus.reduce((acc, type) => {
        acc[type] = `${type}_${base}`;
        return acc;
    }, {});
};

const serialize = obj => {
    return Object.keys(obj)
        .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`,
        )
        .join('&');
};
export { storeData, retrieveData, createRequestTypes, serialize };
