import React from 'react'
import './Menu.css';
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <div className='container-fluid fixed-top'>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">SpaceX</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeclassname="menu_active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeclassname="menu_active" className="nav-link" to="services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeclassname="menu_active" className="nav-link" to="about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeclassname="menu_active" className="nav-link" to="contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu