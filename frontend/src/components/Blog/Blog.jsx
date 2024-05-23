import React from 'react'
import "./Blog.scss"
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div className='container pt-5 pb-5'>
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-lg-7 col-md-12">
                    <div className="section-heading text-center">
                        <h2>Wine's Blog</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
                        <Link to="#">
                            <span>View All Products  <i className="fa-solid fa-arrow-right"></i></span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-lg-4 col-md-12">
                    <div className="blog-item">
                        <img className='img-fluid mb-5' src="https://www.virginwines.co.uk/hub/wp-content/uploads/2023/02/Woman-pouring-red-wine-served-at-the-right-temperature-into-a-glass-on-a-table-with-food-2560x1440.jpg" alt="" />
                        <h6>What You Need To Know About Premium Rosecco</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                        <span>Dave Rogers in News</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="blog-item">
                        <img className='img-fluid mb-5' src="https://www.virginwines.co.uk/hub/wp-content/uploads/2023/02/Woman-pouring-red-wine-served-at-the-right-temperature-into-a-glass-on-a-table-with-food-2560x1440.jpg" alt="" />
                        <h6>What You Need To Know About Premium Rosecco</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                        <span>Dave Rogers in News</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="blog-item">
                        <img className='img-fluid mb-5' src="https://www.virginwines.co.uk/hub/wp-content/uploads/2023/02/Woman-pouring-red-wine-served-at-the-right-temperature-into-a-glass-on-a-table-with-food-2560x1440.jpg" alt="" />
                        <h6>What You Need To Know About Premium Rosecco</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                        <span>Dave Rogers in News</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog