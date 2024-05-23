import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-12">
                        <ul className="nav justify-content-center pt-5 pb-5 gap-2">
                            <li className="nav-item">
                                <Link className="nav-link">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">
                                    <i className="fa-brands fa-twitter"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">
                                    <i className="fa-brands fa-youtube"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8 col-md-12 text-center">Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i>  by Colorlib</div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
