import { types } from '../types';

const initialState = {
    alert: null
}

export const alertReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }

        case types.HIDE_ALERT:
            return {
                ...state,
                alert: null
            }

        default:
            return state;
    }
}