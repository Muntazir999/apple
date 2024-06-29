import React from 'react'
import Product from './Product'

const pData = [
    {

        img: "/jacket-1.jpg",
        title: "Jacket",
        desc: ".........",
        rating: 4,
        price: "45.00",
    },
    {

        img: "/jacket-2.jpg",
        title: "Jacket",
        desc: ".........",
        rating: 4,
        price: "45.00",
    },
    {

        img: "/watch-1.png",
        title: "Watch",
        desc: ".........",
        rating: 4,
        price: "45.00",
    },
    {

        img: "/watch-2.png",
        title: "Watch",
        desc: ".........",
        rating: 4,
        price: "45.00",
    },
    {

        img: "/hat-1.jpg",
        title: "Watch",
        desc: ".........",
        rating: 4,
        price: "45.00",
    },
    {

        img: "/hat-2.jpg",
        title: "Watch",
        desc: ".........",
        rating: 4,
        price: "45.00",
    },
    {

        img: "/phone-1.jpg",
        title: "Watch",
        desc: ".........",
        rating: 4,
        price: "45.00",
    },

]


const NewProduct = () => {
    return (
        <div>
            <div className="container pt-16">
                <h2 className='font-medium text-2xl pb-4'>New Products</h2>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-x-10 xl:gap-y-5'>

                    {pData.map((item, index) => (
                        <Product key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default NewProduct
