import React from 'react'

export const ItemCarrusel = () => {
  return (
    <div className='ms-1 mb-3 row'>
        <div className='col-3'>
            <div className='border p-1 pb-2'>
                <a href='#'>
                    <img src={require('../images/product1.jpg')}
                    className='w-100 h-75' />
                </a>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <a href='#' className='text-capitalize text-decoration-none py-2 text-muted'>6G space silver apple Phone</a>
                <p className='text-danger fw-semibold mb-3'>$169.00 <span className='text-decoration-line-through d-inline text-muted'>$179.00</span></p>
                <button className='btn border rounded-0 bg-dark py-2 px-3 text-white text-uppercase fw-semibolda'>add to cart</button>
            </div>
        </div>
    </div>
  )
}
