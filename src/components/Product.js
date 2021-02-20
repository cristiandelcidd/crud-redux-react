import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEdit } from '../actions/productActions';

import './Product.css'

export const Product = ({ product }) => {

    const { name, price, id } = product;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDeleteProduct = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch( deleteProductAction( id ) )
            }
        })
    };

    const redirectEdit = product => {
        dispatch( getProductEdit( product ) );
        history.push( `/products/edit/${ product.id }` );
    }

    return (
        <tr key={ id } className='product-item'>
            <td>{ name }</td>
            <td className='font-weight-bold'>${ price }</td>
            <td className='actions'>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={ () => redirectEdit( product ) }
                >
                    Edit
                </button>
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={ () => confirmDeleteProduct( id ) }
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}