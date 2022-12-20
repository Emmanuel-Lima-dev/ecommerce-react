import React from 'react';
import './styleNavBar2.css'

export const NavBar2 = () => {
  return (
    <div className='row border-bottom px-5 py-4 w-100 m-0 '>
        <div className='col-lg-6 px-0'>
            <p className='mb-0'><span className='logo'>Rincón</span>Electro</p>
        </div>
        <div className='col-lg-6 ms-auto px-0 d-flex justify-content-end align-items-center'>
            <form className="d-flex h-75 w-50" role="search">
                <input className="form-control rounded-0" type="search" placeholder="Search entire store here..." aria-label="Search"/>
                <button className="btn btn-dark p-2 rounded-0" type="submit"><span className="material-symbols-outlined fw-normal p-1">search</span></button>
            </form>
            <div className='border bg-white ms-3 d-flex text-center align-items-center px-2 h-75'><span className="material-symbols-outlined fw-normal">shopping_cart</span>
            </div>
        </div>
    </div>
  )
}
