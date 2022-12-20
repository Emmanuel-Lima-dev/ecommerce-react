import React from 'react';
import './styleTitleSection.css'

export const TitleSection = ({titulo}) => {
  return (
    <>
        <h1 className='text-uppercase h2 fw-bold text-center my-5 position-relative pb-3'>{titulo}</h1>
    </>
  )
}
