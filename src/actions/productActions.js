import { types } from '../types';
import { axiosClient } from '../config/axios';
import Swal from 'sweetalert2';


export function createNewProductAction( product ) {
    return async ( dispatch ) => {
        dispatch( addProduct() );

        try {
            await axiosClient.post( '/products', product )
            dispatch( addProductSuccess( product ) );
            Swal.fire(
                'Correct!',
                'Product Added Successfully',
                'success'
            )
        } catch (error) {
            console.log( error );
            dispatch( addProductError( true ) );

            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong, try again!',
                icon: 'error',
            })
        }
    }
}

const addProduct = () => ({
    type: types.ADD_PRODUCT,
    payload: true
})

const addProductSuccess = product => ({
    type: types.ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = status => ({
    type: types.ADD_PRODUCT_ERROR,
    payload: status
})

export function getProductsAction() {
    return async ( dispatch ) => {
        dispatch( downloadProducts() );

        try {
            const { data } = await axiosClient.get( '/products' );
            dispatch( downloadProductsSuccess( data ) );
        } catch (error) {
            console.log( error );
            dispatch( downloadProductsError() );
        }
    }
}

const downloadProducts = () => ({
    type: types.START_PRODUCT_DOWNLOAD,
    payload: true
})

const downloadProductsSuccess = products => ({
    type: types.PRODUCT_DOWNLOAD_SUCCESS,
    payload: products
})

const downloadProductsError = () => ({
    type: types.PRODUCT_DOWNLOAD_ERROR,
    payload: true
})

export function deleteProductAction ( id ) {
    return async ( dispatch ) => {
        dispatch( getProductDelete( id ) )

        try {
            await axiosClient.delete( `/products/${ id }` );
            dispatch( deleteProductSucces() );

            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        } catch (error) {
            console.log( error )
            dispatch( deleteProductError() );
        }
    }
}

const getProductDelete = id => ({
    type: types.GET_PRODUCT_DELETE,
    payload: id
})

const deleteProductSucces = () => ({
    type: types.PRODUCT_DELETED_SUCCESS
})

const deleteProductError = () => ({
    type: types.PRODUCT_DELETED_ERROR,
    payload: true
})

export function getProductEdit ( product ) {
    return ( dispatch ) => {
        dispatch( getProductEditAction( product ) )
    }
}

const getProductEditAction = product => ({
    type: types.GET_PRODUCT_EDIT,
    payload: product
})

export function editProductAction ( product ) {
    return async ( dispatch ) => {
        dispatch( editProduct( product ) )

        try {
            await axiosClient.put( `/products/${ product.id }`, product );
            dispatch( editProductSuccess( product ) );
        } catch (error) {
            console.log( error );
            dispatch( editProductError() );
        }
    }
}

const editProduct = () => ({
    type: types.START_PRODUCT_EDITION
})

const editProductSuccess = product => ({
    type: types.PRODUCT_EDITED_SUCCESS,
    payload: product
})

const editProductError = () => ({
    type: types.PRODUCT_EDITED_ERROR,
    payload: true
})