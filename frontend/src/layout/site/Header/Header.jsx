import React from 'react'
import {Link} from "react-router-dom"
import "./Header.scss"

const Header = () => {
    return (
        <div className="container-fluid border-bottom">
            <div className="container header">
            <div className="row justify-content-center pt-3">
                <img src="https://preview.colorlib.com/theme/wines/images/logo.png.webp" alt="" className='pb-3' style={{maxWidth: "200px"}} />
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/basket" className="nav-link">Basket</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Header