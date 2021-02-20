import { types } from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false,
    productdelete: null,
    productedit: null
}

export const productsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.ADD_PRODUCT:
        case types.START_PRODUCT_DOWNLOAD:
            return {
                ...state,
                loading: action.payload
            }

        case types.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [ ...state.products, action.payload ]
            }

        case types.ADD_PRODUCT_ERROR:
        case types.PRODUCT_DOWNLOAD_ERROR:
        case types.PRODUCT_DELETED_ERROR:
        case types.PRODUCT_EDITED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case types.PRODUCT_DOWNLOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }

        case types.GET_PRODUCT_DELETE:
            return {
                ...state,
                productdelete: action.payload
            }

        case types.PRODUCT_DELETED_SUCCESS:
            return {
                ...state,
                products: state.products.filter( product => product.id !== state.productdelete ),
                productdelete: null
            }

        case types.GET_PRODUCT_EDIT:
            return {
                ...state,
                productedit: action.payload
            }

        case types.PRODUCT_EDITED_SUCCESS:
            return {
                ...state,
                productedit: null,
                products: state.products.map( product =>
                    product.id === action.paylod.id ? product = action.payload : product
                )
            }

        default:
            return state;
    }
}