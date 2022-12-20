import React from 'react'
import './styleNavBar1.css'

export const NavBar1 = () => {
  return (
    <div className='row border-bottom py-2 px-5 text-muted w-100 m-0'>
        <div className='col-lg-6 d-flex py-1 align-items-center gap-4 px-0'>
            
        <span className='fs-sm sub-items'>USD - US Dollar<span className='material-symbols-outlined'>expand_more</span></span>
          <span className='fs-sm sub-items'>English<span className='material-symbols-outlined'>expand_more</span></span>
            
        </div>
        <div className='col-lg-6 d-flex pb-0 align-items-center ms-auto me-0 gap-4 justify-content-end px-0'>
          <span className='fs-sm'>Default welcome msg!</span>
          <a href='#' className='text-decoration-none text-muted item'> Sign In</a>
          <a href='#' className='text-decoration-none text-muted item'>Create an Account</a>
        </div>
    </div>
  )
}
