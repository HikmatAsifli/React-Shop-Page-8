import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import Banner from '../../../components/Banner/Banner'
import Products from '../../../components/Products/Products'
import Welcome from '../../../components/Welcome/Welcome'
import Testimonials from '../../../components/Testimonials/Testimonials'
import Blog from '../../../components/Blog/Blog'

const Home = () => {
    const { data, setData } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <Products />
            <Welcome />
            <Testimonials />
            <Blog />
        </>
    )
}

export default Home
