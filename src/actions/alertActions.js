import { types } from '../types';

export function showAlert ( alert ) {
    return ( dispatch ) => {
        dispatch( createAlert( alert ) );
    }
}

const createAlert = alert => ({
    type: types.SHOW_ALERT,
    payload: alert
})

export function hideAlertAction () {
    return ( dispatch ) => {
        dispatch( hideAlert() );
    }
}

const hideAlert = () => ({
    type: types.HIDE_ALERT
})