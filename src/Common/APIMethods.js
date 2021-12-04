import { API_REQUEST_FAILED } from '../Actions/Types';
import { Platform } from 'react-native';
var packageDetails = require('../../package.json');

// API methods
export const SITE_URL = 'https://api.iawaketechnologies.com/';
export const SERVICE_URL = 'https://api.iawaketechnologies.com/api/';

export const GET_PROGRAMS_METHOD = 'v2/media-library/free?resetCache=false';

// api types
export const POST = 'POST';
export const GET = 'GET';
export const DELETE = 'DELETE';
SOMETHING_WENT_WRONG = "Something went wrong. Please try again"

export const apiRequest = (method, methodType, params, dispatch) => {
    if (methodType == GET) {
        return getAPI(method, methodType, dispatch);
    } else if (methodType == POST) {
        return postAPI(method, params, dispatch);
    }
};

const getAPI = (method, methodType, dispatch) => {
    console.log(SERVICE_URL + method);
    return fetch(SERVICE_URL + method, {
        method: methodType,
        headers: {
        },
    })
        .then(function (res) {
            //return Promise.all([res.status, res.text()]);
            if (!res.ok) {
                throw Error(res.status);
            } else {
                // convert response data to JSON
                return res.json();
            }
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: API_REQUEST_FAILED,
                payload: 999,
                payloadMessage: SOMETHING_WENT_WRONG,
            });
        });
};

const postAPI = (method, params, deviceId, dispatch) => {
    return fetch(SERVICE_URL + method, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: params,
    })
        .then(function (res) {
            if (!res.ok) {
                throw Error(res.status);
            } else {
                // convert response data to JSON
                return res.json();
            }
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: API_REQUEST_FAILED,
                payload: 999,
                payloadMessage: SOMETHING_WENT_WRONG,
            });
        });
};
