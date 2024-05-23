import React, { useContext, useState } from 'react'
import "./Products.scss"
import { Link } from 'react-router-dom'
import MainContext from '../../context/context'

const Products = () => {
    const { data, addToBasket } = useContext(MainContext)
    const [inpVal, setInpVal] = useState("");
    const [sortBy, setSortBy] = useState(null);
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
            <div className="row">
                <div className="col-lg-10 mb-5">
                    <input
                        value={inpVal}
                        onChange={(e) => {
                            setInpVal(e.target.value);
                        }}
                        type="text"
                        placeholder="Search "
                    />
                    <button
                        onClick={() => setSortBy({ field: "title", asc: null })}
                        className="btn btn-light mx-3  "
                    >
                        default
                    </button>
                    <button
                        onClick={() => setSortBy({ field: "title", asc: true })}
                        className="btn btn-light mx-3  "
                    >
                        A-Z
                    </button>
                    <button
                        onClick={() => setSortBy({ field: "title", asc: false })}
                        className="btn btn-light mx-3 "
                    >
                        Z-A
                    </button>
                    <button
                        onClick={() => setSortBy({ field: "price", asc: false })}
                        className="btn btn-light"
                    >
                        Low To High
                    </button>
                    <button
                        onClick={() => setSortBy({ field: "price", asc: true })}
                        className="btn btn-light mx-3 "
                    >
                        High To Low
                    </button>
                </div>
            </div>
            <div className="row justify-content-between">
                {
                    data
                        .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
                        .sort((a, b) => {
                            if (!sortBy) {
                                return 0;
                            } else if (sortBy.asc == true) {
                                return a[sortBy.field] > b[sortBy.field]
                                    ? 1
                                    : b[sortBy.field] > a[sortBy.field]
                                        ? -1
                                        : 0;
                            } else if (sortBy.asc == false) {
                                return a[sortBy.field] < b[sortBy.field]
                                    ? 1
                                    : b[sortBy.field] < a[sortBy.field]
                                        ? -1
                                        : 0;
                            }
                        })
                        .map((item) => (
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