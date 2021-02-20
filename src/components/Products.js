import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productActions';
import { Product } from './Product';

import './Products.css'

export const Products = () => {

    const dispatch = useDispatch()

    useEffect( () => {
        const loadProducts = () => dispatch( getProductsAction() );
        loadProducts();
        // eslint-disable-next-line
    }, [] );

    const { products, error, loading } = useSelector( state => state.products );

    return (
        <>
            <h2>Product Listing</h2>

            {
                error
                &&
                <p className='font-weight-bold alert alert-danger text-center mt-5'>
                    Something went wrong
                </p>
            }

            {
                loading
                &&
                <p className='text-center'>
                    Loading...
                </p>
            }

            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length === 0 ?
                        'No products':
                        products.map( product =>
                            <Product key={ product.id } product={ product } />
                        )
                    }
                </tbody>
            </table>
        </>
    )
}