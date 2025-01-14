import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            {/* left section */}
            <div className="">
                <img className='mb-5 w-40 ' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore perferendis debitis molestias ea qui explicabo esse enim ab non.</p>
            </div>

            {/* center section */}
            <div className="">
                <p className='text-xl font-mediun mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* right section */}
            <div className="">
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+2134-4536-4235</li>
                    <li>uroko234556@gmail.com</li>
                </ul>
            </div>
        </div>

    {/* COPYRIGHT TEXT */}

        <div className="">
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Prescriptio - All Right Reserved,</p>
        </div>
    </div>
  )
}

export default Footer