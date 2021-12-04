import { Platform } from 'react-native';
import {
    API_REQUEST_FAILED,
    PROGRAMS,
    TRACKS
} from './Types';
import {
    apiRequest,
    GET,
    GET_PROGRAMS_METHOD,
} from '../Common/APIMethods';
SOMETHING_WENT_WRONG = "Something went wrong. Please try again"

export const getProgramsAction = () => {
    return dispatch => {
        getProgramsActionAPI(dispatch);
    };
};

const getProgramsActionAPI = (dispatch) => {
    apiRequest(GET_PROGRAMS_METHOD, GET, '', dispatch).then(res => {
        if (res) {
            dispatch({
                type: PROGRAMS,
                programs: res.programs,
            });
        } else {
            dispatch({
                type: API_REQUEST_FAILED,
                payloadMessage: SOMETHING_WENT_WRONG,
            });
        }
    });
};