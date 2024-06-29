import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <div className='container pt-16 pb-16 grid-cols-2'>
                <h2 className='font-medium text-2xl pb-4'>Testimonial</h2>
                <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
                    <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
                        <div className='text-center flex flex-col items-center gap-1'>
                            <Image
                                className='rounded-full inline-block'
                                src="/user.png"
                                alt="User-image"
                                width={80}
                                height={80}
                            />
                            <h2 className='text-gray-500 font-black text-[20px]'>PHANTUM</h2>
                            <p>CEO & Founder</p>
                            <Image
                                className='inline-block py-2'
                                src="/quotes.png"
                                alt="quotes"
                                width={50}
                                height={50}
                            />
                            <p className='max-w-[200px] text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea!
                            </p>
                        </div>
                    </div>


                    <div className='bg-red-600 bg-[url(/Items-banner.png)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
                        <div className='bg-[rgb(202,196,196)] min-w-[270px] sm:min-w-[300px] md:min-w-[500px]'>
                            <button className='bg-blackish text-white p-2 rounded-md'>25% DISCOUNT</button>
                            <h2 className='font-extrabold text-[#272727]'>Summer Collection</h2>
                            <p className='text-gray-500 text-[20px]'>Starting @ $20 <b>Shop Now</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
