import React from 'react'
import "./Testimonials.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 320,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
    };
    return (
        <div className='container mt-5 mb-5'>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='slide-item d-flex flex-column justify-content-center'> 
                        <img className='m-auto' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                        <p className='text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores quis inventore reprehenderit quas illum vero, earum dolore numquam mollitia culpa ut sunt. Adipisci ut excepturi necessitatibus, tempora numquam, quo esse, consectetur dolor maxime deleniti error similique repellat eum consequatur!"</p>
                        <span className='text-center' style={{color: "orangered"}} >Allie Smith</span>
                    </div>
                    <div className='slide-item d-flex flex-column justify-content-center'> 
                        <img className='m-auto' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                        <p className='text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores quis inventore reprehenderit quas illum vero, earum dolore numquam mollitia culpa ut sunt. Adipisci ut excepturi necessitatibus, tempora numquam, quo esse, consectetur dolor maxime deleniti error similique repellat eum consequatur!"</p>
                        <span className='text-center' style={{color: "orangered"}} >Allie Smith</span>
                    </div>
                    <div className='slide-item d-flex flex-column justify-content-center'> 
                        <img className='m-auto' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                        <p className='text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores quis inventore reprehenderit quas illum vero, earum dolore numquam mollitia culpa ut sunt. Adipisci ut excepturi necessitatibus, tempora numquam, quo esse, consectetur dolor maxime deleniti error similique repellat eum consequatur!"</p>
                        <span className='text-center' style={{color: "orangered"}} >Allie Smith</span>
                    </div>
                    <div className='slide-item d-flex flex-column justify-content-center'> 
                        <img className='m-auto' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                        <p className='text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores quis inventore reprehenderit quas illum vero, earum dolore numquam mollitia culpa ut sunt. Adipisci ut excepturi necessitatibus, tempora numquam, quo esse, consectetur dolor maxime deleniti error similique repellat eum consequatur!"</p>
                        <span className='text-center' style={{color: "orangered"}} >Allie Smith</span>
                    </div>
                    <div className='slide-item d-flex flex-column justify-content-center'> 
                        <img className='m-auto' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                        <p className='text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores quis inventore reprehenderit quas illum vero, earum dolore numquam mollitia culpa ut sunt. Adipisci ut excepturi necessitatibus, tempora numquam, quo esse, consectetur dolor maxime deleniti error similique repellat eum consequatur!"</p>
                        <span className='text-center' style={{color: "orangered"}} >Allie Smith</span>
                    </div>
                    <div className='slide-item d-flex flex-column justify-content-center'> 
                        <img className='m-auto' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                        <p className='text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores quis inventore reprehenderit quas illum vero, earum dolore numquam mollitia culpa ut sunt. Adipisci ut excepturi necessitatibus, tempora numquam, quo esse, consectetur dolor maxime deleniti error similique repellat eum consequatur!"</p>
                        <span className='text-center' style={{color: "orangered"}} >Allie Smith</span>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials