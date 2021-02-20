import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// Redux actions
import { createNewProductAction } from '../actions/productActions';
import { showAlert, hideAlertAction } from '../actions/alertActions';

import './NewProduct.css';

export const NewProduct = ({ history }) => {

    const [ name, saveName ] = useState( '' );
    const [ price, savePrice ] = useState( 0 );

    const dispatch = useDispatch();

    const { loading, error } = useSelector( state => state.products );
    const { alert } = useSelector( state => state.alert );

    const addProduct = product => dispatch( createNewProductAction( product ) );

    const submitNewProduct = e => {
        e.preventDefault();

        if ( name.trim() === '' || price <= 0 ) {
            const alert = {
                msg: 'Both fields are required',
                classes: 'alert alert-danger text-center'
            }
            dispatch( showAlert( alert ) );
            return;
        }

        dispatch( hideAlertAction() );

        addProduct({
            name,
            price
        })

        saveName( '' );
        savePrice( 0 );

        history.push( '/' );
    }

    return (
        <div className='row'>
            <div className='card'>
                <div className='card-body'>
                    <h2>
                        Add New Product
                    </h2>

                    {
                        alert
                        &&
                        (
                            <p className={ alert.classes }>{ alert.msg }</p>
                        )
                    }

                    <form
                        onSubmit={ submitNewProduct }
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
                                onChange={ e => saveName( e.target.value ) }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Product Price</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Product Price'
                                autoComplete='off'
                                name='price'
                                value={ price }
                                onChange={ e => savePrice( Number( e.target.value ) ) }
                            />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-primary mt-5 btn-block font-weight-bold-uppercase'
                        >
                            Add Product
                        </button>
                    </form>
                    { loading && <p>Loading...</p> }
                    { error && <p className='alert alert-danger'>Something went wrong</p> }
                </div>
            </div>
        </div>
    )
}