import { useState } from "react"
import Navbar from "../components/Navbar"
import banner1 from "../assets/banner_1.jpeg"
import banner2 from "../assets/banner_2.jpeg"
import banner3 from "../assets/banner_3.jpeg"
import banner4 from "../assets/banner_4.jpeg"
import product1 from "../assets/product-1.jpeg"
import product2 from "../assets/product-2.jpeg"
import product3 from "../assets/product-3.jpeg"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import CardProduct from "../components/CardProduct"

const Home = () => {
    const [bannerData] = useState([
        {
            title: "Banner 1",
            image: banner1
        },
        {
            title: "Banner 2",
            image: banner2
        },
        {
            title: "Banner 3",
            image: banner3
        },
        {
            title: "Banner 4",
            image: banner4
        }
    ])

    const [products] = useState([
        {
            id: 1,
            product_name: "Adidas Samba",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta dolorum libero fugit eveniet officiis repudiandae at perferendis accusantium velit vero.",
            stock: 20,
            price: 2000000,
            product_type: "Shoes",
            product_image: product1
        },
        {
            id: 2,
            product_name: "Nike Air Jordan",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta dolorum libero fugit eveniet officiis repudiandae at perferendis accusantium velit vero.",
            stock: 20,
            price: 1000000,
            product_type: "Shoes",
            product_image: product2
        },
        {
            id: 3,
            product_name: "Swallow Shoes",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta dolorum libero fugit eveniet officiis repudiandae at perferendis accusantium velit vero.",
            stock: 20,
            price: 10000000,
            product_type: "Shoes",
            product_image: product3
        },
    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <Navbar />
            <div className="container p-4">
                <Slider {...settings}>
                    {
                        bannerData.map((banner, index) => (
                            <img src={banner.image} alt={banner.title} key={index} />
                        ))
                    }
                </Slider>
            </div>
            <div className="container p-4">
                <div className="row">
                    {
                        products?.map((product, index) => <CardProduct key={index} {...product} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Home