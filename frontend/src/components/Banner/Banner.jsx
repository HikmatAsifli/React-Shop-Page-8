import React from 'react'
import "./Banner.scss"

const Banner = () => {
    return (
        <div className="container">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active banner">
                        <img src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGV8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt="..." />
                        <div className='banner-item'>
                            <p>ROYAL WINE</p>
                            <h2>GRAPE WINE</h2>
                        </div>
                    </div>
                    <div class="carousel-item banner">
                        <img src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGV8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt="..." />
                        <div className='banner-item'>
                            <p>ROYAL WINE</p>
                            <h2>GRAPE WINE</h2>
                        </div>
                    </div>
                    <div class="carousel-item banner">
                        <img src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGV8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt="..." />
                        <div className='banner-item'>
                            <p>ROYAL WINE</p>
                            <h2>GRAPE WINE</h2>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Banner