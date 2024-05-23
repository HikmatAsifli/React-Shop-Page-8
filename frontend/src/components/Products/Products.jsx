import React, { useContext } from 'react'
import "./Products.scss"
import { Link } from 'react-router-dom'
import MainContext from '../../context/context'

const Products = () => {
    const { data, addToBasket } = useContext(MainContext)
    return (
        <div className="container">
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-lg-7 col-md-12">
                    <div className="section-heading text-center">
                        <h2>Our Products</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
                        <Link to="#">
                            <span>View All Products  <i className="fa-solid fa-arrow-right"></i></span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between">
                {
                    data.map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                            <div className="single-product mb-5">
                                <div className="product-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="product-content">
                                    <h3>{item.title}</h3>
                                    <div className="price">{item.price}$</div>
                                    <div className="product-hover">
                                        <h3 className='product-hover-title'>{item.title}</h3>
                                        <div className="product-hover-price">{item.price}$</div>
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <button onClick={() => addToBasket(item._id)} className="btn btn-light pt-3">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products