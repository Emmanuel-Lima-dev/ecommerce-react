import React from 'react';
import './styleNavBar3.css'

export const NavBar3 = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-0">
        <div className="container-fluid px-5">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active text-uppercase bg-danger fw-semibold p-3" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-uppercase text-white fw-semibold p-3" href="#">Shop<span className='material-symbols-outlined'>expand_more</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-uppercase text-white fw-semibold p-3" href="#">Electronics<span className='material-symbols-outlined'>expand_more</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-uppercase text-white fw-semibold p-3" href='#'>Sports & books<span className='material-symbols-outlined'>expand_more</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-uppercase text-white fw-semibold p-3" aria-current="page" href="#">Sale</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
