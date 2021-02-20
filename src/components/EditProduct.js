import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { editProductAction } from '../actions/productActions';

import './NewProduct.css';

export const EditProduct = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ product, saveProduct ] = useState({
        name: '',
        price: ''
    });

    const { productedit } = useSelector( state => state.products );

    useEffect( () => {
        saveProduct( productedit );
    }, [ productedit ] );

    const onChangeForm = ({ target }) => {
        saveProduct({
            ...product,
            [ target.name ]: target.value
        })
    }

    const { name, price } = product;

    const submitEditProduct = e => {
        e.preventDefault();

        dispatch( editProductAction( product ) );
        history.push( '/' );
    }

    return (
        <div className='row'>
            <div className='card'>
                <div className='card-body'>
                    <h2>
                        Edit Product
                    </h2>
                    <form
                        onSubmit={ submitEditProduct }
                    >
                        <div className='form-group'>
                            <label htmlFor=''>Product Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Product Name'
                                autoComplete='off'
                                name='name'
                                value={ name }
                                onChange={ onChangeForm }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Product Price</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Product Price'
                                min='0'
                                autoComplete='off'
                                name='price'
                                value={ price }
                                onChange={ onChangeForm }
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-primary mt-5 btn-block font-weight-bold-uppercase'
                        >
                            Edit Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}