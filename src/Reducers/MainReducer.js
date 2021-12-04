import {
    PROGRAMS,
    API_REQUEST_FAILED,
    API_REQUEST_DATA_CLEAR,
} from "../Actions/Types";

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROGRAMS:
            return {
                ...state,
                programs:action.programs
            };

        case API_REQUEST_FAILED:
            return {
                ...state,
                isRequestFailed: true,
                requestFailedStatus: action.payload,
                requestFailedMessage: action.payloadMessage,
            };
        case API_REQUEST_DATA_CLEAR:
            return {
                ...state,
                isRequestFailed: false,
                requestFailedStatus: -1,
                requestFailedMessage: '',
            };
        default:
            return { ...state, isRequestFailed: false };
    }
};


